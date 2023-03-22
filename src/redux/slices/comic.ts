import { createSlice } from "@reduxjs/toolkit";
import { ComicType } from "../../types/comicType";


const initialState:ComicType[]=[]

const comicSlice=createSlice({
    name:'comic',
    initialState:initialState,
    reducers:{
        addComic:(state)=>{
            return state
        }
    }
})

export const {addComic} =comicSlice.actions
export default comicSlice.reducer