import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSessions, selectSessionsData } from '../redux/calendarReducer.ts';
import { AppDispatch } from '../redux/store';
import SessionsList from '../components/sessionsList/SessionsList';
import CalendarTitle from '../components/calendar/CalendarTitle.tsx';
import CalendarBody from '../components/calendar/CalendarBody.tsx';
import CalendarNavigation from '../components/calendar/CalendarNavigation.tsx';
import moment from 'moment';
import loaderGif from '../assets/loader.gif';
import errorGif from '../assets/error.gif';
import { addDateBy, getMonday } from '../utils.ts';
import { LOADING_STATE } from '../constants';

import {
    StyledError,
    StyledLoader,
    StyledStateWrapper,
    StyledCalendarWrapper,
    StyledMainWrapper,
} from '../components/calendar/calendar.style.ts';


const CalendarPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { sessions, loadingState, error } = useSelector(selectSessionsData);

    const [mondayDate, setMondayDate] = useState(getMonday());
    const minDate = moment(mondayDate).format('YYYY-MM-DD');
    const maxDate = moment(addDateBy(mondayDate, 7)).format('YYYY-MM-DD');


    useEffect(() => {
        dispatch(fetchSessions({ minDate, maxDate }));
    }, [minDate, maxDate, dispatch]);

    const handleWeekChange = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setMondayDate(addDateBy(mondayDate, 7));
        } else {
            setMondayDate(addDateBy(mondayDate, -7));
        }
    };

    if (error) {
        return (
            <StyledStateWrapper>
                <StyledError src={errorGif} alt='error' />
                <p>
                    Something went wrong, please try again later.
                </p>
            </StyledStateWrapper>
        )
    }

    return (
        <StyledCalendarWrapper>
            Calendar App.
            {loadingState === LOADING_STATE.READY && <CalendarNavigation handleWeekChange={handleWeekChange} />}

            {
                loadingState === LOADING_STATE.LOADING ? (
                    <StyledStateWrapper>
                        <StyledLoader src={loaderGif} alt='LOADING DATA....' />
                    </StyledStateWrapper>
                ) :
                    (
                        <>
                            <CalendarTitle mondayDate={mondayDate} />
                            <StyledMainWrapper>
                                <CalendarBody mondayDate={mondayDate} sessions={sessions} />
                                <SessionsList sessions={sessions} loadingState={loadingState} />
                            </StyledMainWrapper>
                        </>
                    )
            }
        </StyledCalendarWrapper>
    );
};

export default CalendarPage;