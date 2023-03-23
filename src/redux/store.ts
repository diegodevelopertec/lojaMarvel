import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuMobile";
import comicReducer from './slices/comic'

const store=configureStore({
    reducer:{
        menu:menuReducer,
        comics:comicReducer
    }
})

export default store

export type RootState=ReturnType<typeof store.getState>