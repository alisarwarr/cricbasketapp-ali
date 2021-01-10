import { configureStore } from '@reduxjs/toolkit';
import basketSliceReducer from './basketSlice';
import itemIdSliceReducer from './itemIdSlice';

const store = configureStore({
    reducer: {
        basketSliceReducer,
        itemIdSliceReducer
    }
})

export default store;