import { createSlice } from '@reduxjs/toolkit';

export const itemIdSlice = createSlice({
    name: "itemId",

    initialState: {
        value: 1
    },

    reducers: {
        clickedItemID: (state, action) => {
            state.value = action.payload;             //returns id
        }
    }
})

export const { clickedItemID } = itemIdSlice.actions;
export const selectItemId = (state) => state.itemIdSliceReducer.value;
export default itemIdSlice.reducer;