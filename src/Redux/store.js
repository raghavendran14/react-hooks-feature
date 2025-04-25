import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './CouterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;