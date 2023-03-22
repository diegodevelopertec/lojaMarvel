import { createSlice } from "@reduxjs/toolkit";


const initialState=false

const menuSlice=createSlice({
 name:'menumobile',
 initialState:initialState,
 reducers:{
    toggleMenu: (state:boolean) => {
        return !state;
      },
 }
})

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;