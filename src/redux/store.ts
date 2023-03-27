import React from "react";
import { configureStore, createReducer } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuMobile";
import comicReducer from './slices/comic'
import cartReducer from './slices/cart'


const store=configureStore({
    reducer:{
        menu:menuReducer,
        comics:comicReducer,
        cart:cartReducer
    }
})

export default store

export type RootState=ReturnType<typeof store.getState>