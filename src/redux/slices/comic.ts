import { createSlice } from "@reduxjs/toolkit";
import { ComicType } from "../../types/comicType";
import comic  from '/comic.jpg'

const initialState:ComicType[]=[{
        id: 1,
        title: 'spider-man',
        issueNumber:34,
        description: '',
        format: 'PDF',
        pageCount: 34,
        prices: [],
        thumbnail: comic,
        series: ''
}]

const comicSlice=createSlice({
    name:'comics',
    initialState:initialState,
    reducers:{
        addComic:(state)=>{
            return state
        }
    }
})

export const {addComic} =comicSlice.actions
export default comicSlice.reducer