import axios from "axios"
import { ComicApi, ComicType } from "../types/comicType"
import md5 from 'md5'




const BaseURL='http://gateway.marvel.com/v1/public/comics'
const keyPublic='beb4529ab433eeceef1182e44b96f43b'
const keyPrivate='1fa50770cd06874de93f4a8ec84f840f29a74f15'
const timestamp=Date.now()
const str = timestamp +keyPrivate + keyPublic
const hash=md5(str)
const limit=9
const offSet=12
const url=`http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${keyPublic}&limit=${limit}&hash=${hash}&offset=${offSet}`



export const useApi={
       getComicsList:async():Promise<ComicApi>=>{
        let  res=await axios.get(url)
       let {data}=res
       return data
    }
}