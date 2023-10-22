import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getActivityData, getCoachData, getLocationData, getWeeklyOffersData } from '../services/offersService';
import { LOADING_STATE } from '../constants';
import { SessionType } from '../types/types';
import { RootState } from './store';
import { extractSessionData } from '../utils';

interface CalendarState {
  sessions: SessionType[];
  loadingState: string;
  error: string | null;
}

interface Params {
  minDate: string,
  maxDate: string
}


export const fetchSessions = createAsyncThunk(
  'fetchSessions',
  async ({ minDate, maxDate }: Params, { dispatch, rejectWithValue }) => {

    try {
      const response = await getWeeklyOffersData(minDate, maxDate);
      const { results } = response.data;

      const offers = Array.isArray(results) ? results : [];

      const sessions = await Promise.all(offers.map(async (offer) => {
        const activityResponse = await getActivityData(offer.meta_activity);
        const coachResponse = await getCoachData(offer.coach);
        const locationResponse = await getLocationData(offer.establishment);
  
        const res = extractSessionData(offer, 
          activityResponse.data.results[0], 
          locationResponse.data.results[0].location.address, 
          coachResponse.data[0]
        );
        return res;
      }));

      return sessions;
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      dispatch(updateLoadingState(LOADING_STATE.READY));
      return rejectWithValue(e.response.data.message || String(e.response.data));
    }
  });

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    sessions: [],
    loadingState: LOADING_STATE.INITIAL,
    error: null,
  } as CalendarState,
  reducers: {
    updateLoadingState: (state, action) => {
      state.loadingState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessions.pending, (state) => {
        state.loadingState = LOADING_STATE.LOADING;
        return state;
      })
      .addCase(fetchSessions.fulfilled, (state, action) => {
        state.sessions = action.payload;
        state.loadingState = LOADING_STATE.READY;
        return state;
      })
      .addCase(fetchSessions.rejected, (state, action) => {
        state.error = String(action.payload);
        state.loadingState = LOADING_STATE.ERROR;
        return state;
      })
    }
});

export const { updateLoadingState } = calendarSlice.actions;

export const selectSessionsData = (state: RootState) => state.calendar;

export default calendarSlice.reducer;