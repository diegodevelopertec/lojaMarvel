import { Container } from "../structure/Container/Index"
import { Title } from "../structure/Title"
import { Text } from "../structure/Text"
import { ComicType } from "../../types/comicType"
import { Image } from "../structure/Image"
import { Buttom } from "../structure/Button"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useDispatch} from "react-redux"
import { addComic, setComicId } from "../../redux/slices/comic"



type Props={
    comic:ComicType
}
export const CardComic=({comic}:Props)=>{
  const {comics}=useAppSelector(state=>state)
    const navigate=useNavigate()
    const dispacth=useDispatch()


    const setComicData=()=>{
      
        
        const idComic={
            id: comic.id,
            title: comic.title,
            description: comic.description,
            pageCount:comic.pageCount,
            prices:comics.comicId.prices,
            thumbnail:comic.thumbnail.path
        }
        dispacth(setComicId(idComic))
      
        console.log(idComic);
        navigate(`/comics/${idComic.id}`)
    }


    return <Container trs="all ease .2s" bgHover="#050505" colorHover="red"   bdRadius="10px" boxShadow="0 0 5px #eee" bg="#19191a" p="30px  12px"   m="13px" >
        <Container   w='100%' h="250px" p="12px" overflow="hidden"  d="flex" flexJustify="center">
            <Image src={`${comic.thumbnail.path}.jpg`} h='200px' />
        </Container>
       <Container m="30px 0" h="100px" d="flex" flexDirection="column">
          <Title fontSize='1.453em'  >{comic.title}</Title>
       </Container>
        
        <Container d="flex" flexJustify="center" m="12px 0">
            <Buttom onClick={()=>setComicData()} trs="all ease .2s" 
                 bd="1px solid transparent" colorHover="#db3518" color="#eee" bgHover="transparent" 
                 bdHover="1px solid #db3518" bdRadius="12px" mnw="190px" bg="#c93b22" p="17px 30px" cursor="pointer"
                 >Detalhes
            </Buttom>
        </Container>
    </Container>
}