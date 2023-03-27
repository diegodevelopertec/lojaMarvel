import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { ComicType } from "../../types/comicType";
import { comicIdType } from "../../types/comicType";
import comic  from '/comic.jpg'



interface InitialState{
    comics:ComicType[] | [],
    comicId: comicIdType
}

type action={
    type:string,
    payload:ComicType
}
const initialState={
    comics:[],
    comicId: {
        id:0,
        title:'',
        description:'',
        pageCount:0,
        prices:[
            {
                type: '',
                price: 0
            }]
        ,
        thumbnail:''
      
        }
}

const comicsSlice=createSlice({
    name:'comics',
    initialState:initialState,
    reducers:{
        addComic:(state,action)=>{
            [state,...action.payload]
            
        },
       setComicId:(state,action)=>{
           state.comicId=action.payload
       }
    
    }
})

export const {addComic,setComicId}=comicsSlice.actions
export default comicsSlice.reducer