import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers : {
        addItem : (state, action) => {
            console.log(state);
            console.log(action);
            state.items.push(action.payload.card)
        },
        removeItem : (state, action) => {
            console.log(state);
            console.log(action);
        },
        clearCart : (state, action) => {
            console.log(state);
            console.log(action);
        },
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer;