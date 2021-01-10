import { createSlice } from '@reduxjs/toolkit';
import { basketInitialState } from './basketInitialState';

const basketSlice = createSlice({
    name: "basket",

    initialState: basketInitialState,                                  //assigning initialState as array

    reducers: {
        added: (state, action) => {
            return state.map(item => {
                if(item.id === action.payload) {
                    console.log("addded", action.payload);             //returns id
                    return {
                        ...item,
                        added: true,
                        quantity: item.quantity + 1,
                    }
                }
                
                return item;
            })
        },

        removed: (state, action) => {
            return state.map(item => {
                if(item.id === action.payload) {
                    console.log("removed", action.payload);            //returns id
                    return {
                        ...item,
                        added: false,
                        quantity: (item.quantity !== 0) ? item.quantity - 1 : 0
                    }
                }
                
                return item;
            })
        },

        quited: (state, action) => {
            return state.map(item => {
                if(item.id === action.payload) {
                    console.log("quit", action.payload);               //returns id
                    return {
                        ...item,
                        added: false,
                        quantity: 0
                    }
                }
                
                return item;
            })
        },

        reset: (state) => {
            return state.map(item => {
                return {
                    ...item,
                    quantity: 0
                }
            })
        }
    }
})

export const { added, removed, quited, reset } = basketSlice.actions;
export const selectBasket = (state) => state.basketSliceReducer;       //passing initialState as array
export default basketSlice.reducer;