import { CardComic } from "../../Components/CardComic"
import { Container } from "../../Components/structure/Container/Index"
import { Title } from "../../Components/structure/Title"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useApi } from "../../Services/config"
import { useState,useEffect } from "react"
import { ComicType } from "../../types/comicType"
import comic from "../../redux/slices/comic"
import {Loading} from "./../../Components/Loading/index"
import { Pagination } from "../../Components/Pagination"
import Qs from 'qs'
import { useDispatch } from "react-redux"
import { addComic } from "../../redux/slices/comic"


export const Comics=()=>{

        const [comics, setComics] = useState<ComicType[] | []>([]);
        const [offSet,setOffSet]=useState(0)
        const dispacth=useDispatch()
        let  dataResults=0
        dispacth(addComic(comics))


        const  comicList= async()=>{
          try{
             const res=await useApi.getComicsList()
             const {data}=res
             dataResults=data.total
             setComics(data.results)
          }catch{
              console.log('deu algum erro na requisição');  
          }
        }

        
    useEffect(()=>{
      comicList()
      setOffSet(dataResults)
    },[])









    return <Container  p="10px" w="100%" >

           
            {comics.length > 0 ? <>
            
            <Container m="100px 0"  d="grid"  mqw="100vw" gridColumns="repeat(3,1fr)">
                {comics.map((i,k)=>(
                    <CardComic  comic={i} key={k} />
                ))}
                 
            </Container>
            <Pagination setOffSet={setOffSet} limit={12} offset={offSet} totalPage={dataResults} />
            </>
            :
            <Container   w="100%" mnh="100vh" d="flex" flexJustify="center" flexAlign="center">
               <Loading color="red" />
           </Container>
            
            }
    
            
            
            
      
       
    </Container>
}