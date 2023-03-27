import { createSlice } from "@reduxjs/toolkit";
import { comicIdType, ComicType } from "../../types/comicType";
import { useEffect } from "react";


type initialState={
    comicsCart:[] | comicIdType[],
    totalCart:number
}

const initialState={
    comicsCart:[{
        id: 0,
        title: '',
        description: '',
        pageCount:0,
        prices: [
            {
                type: '',
                price: 0,
            }
        ],
        thumbnail: ''
    }],
    totalCart:0
}


const CartSlice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        setComicCart:(state,action)=>{
            state.comicsCart.push(action.payload)
            state.totalCart+=action.payload
           
        },
        removeComicCart:(state,action)=>{
            state.comicsCart=state.comicsCart.filter(i=>i.id !== action.payload.id)
            state.comicsCart
            state.totalCart-=action.payload
        }
    }
})




export const {setComicCart,removeComicCart}=CartSlice.actions
export default CartSlice.reducer