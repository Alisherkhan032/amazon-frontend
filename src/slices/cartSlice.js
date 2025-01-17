import { createSlice } from "@reduxjs/toolkit";
import products from "../assets/products";

const initialState = {
    items : products.slice(0, 4).map((product) => ({...product, quantity : 1, selected : true}))
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        updateQuantity : (state, action) => {
            const {id, increment} = action.payload;
            const product = state.items.find((item) => item.id === id)

            if(!product) return;

            product.quantity += increment;
            if(product.quantity === 0){
                state.items = state.items.filter((item) => item.id !== id);
            }
        },
        toggleSelect : (state, action) => {
            const {id} = action.payload;
            const product = state.items.find((item) => item.id === id);
            
            if(!product) return;

            product.selected = !product.selected;
        },
        addToCart : (state, action) => {
            const {product} = action.payload;
            console.log('product', product);
            const existingProduct = state.items.find((item) => item.id === product.id);

            if(existingProduct) return;

            const newProduct = {...product, quantity : 1, selected : true};
            state.items.push(newProduct);
        },
        removeFromCart : (state, action)=>{
            const {id} = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        }
    }
})

export const {  updateQuantity, toggleSelect, addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer;