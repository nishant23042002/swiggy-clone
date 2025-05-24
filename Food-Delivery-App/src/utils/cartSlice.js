import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            console.log(state);
            console.log(action);
            const item = state.items.find((item) => item.card.info.id == action.payload.card.info.id)
            // state.items.push(action.payload.card)
            const data = { ...action.payload, quantity: 1 }
            if (!item) {
                state.items.push(data)
            } else {
                item.quantity++
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload.card.info.id;

            const existingItem = state.items.find(item => item.card.info.id === itemId);

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                } else {
                    state.items = state.items.filter(item => item.card.info.id !== itemId);
                }
            }
        },
        clearCart: (state, action) => {
            state.items = [];
            console.log(state);
            console.log(action);
        },
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer;