import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import counterReducer from './CouterSlice';
import userReducer from './UserSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;