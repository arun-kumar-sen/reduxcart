import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        add(state,action){
            state.cart.push(action.payload);
        },
        remove(state,action){
            return state.cart.filter((item)=> item.id!=action.payload);
        }
    }
})

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;