import {configureStore} from '@reduxjs/toolkit';
import cartReducers from './counterSlice';


const store = configureStore({
    reducer: {
        cart: cartReducers
    }
})

export default store;