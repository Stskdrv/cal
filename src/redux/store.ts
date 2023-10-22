import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from './calendarReducer';

const store = configureStore({
    reducer: {
        calendar: calendarReducer,
    }
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
