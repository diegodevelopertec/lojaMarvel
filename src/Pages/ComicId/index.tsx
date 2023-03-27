import { Container } from "../../Components/structure/Container/Index"
import { Image } from "../../Components/structure/Image"
import { Title } from "../../Components/structure/Title"
import { Text } from "../../Components/structure/Text"
import img from '/comic.jpg'
import { Buttom } from "../../Components/structure/Button"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hooks/useAppSelector"
import comic from "../../redux/slices/comic"
import { ComicType } from "../../types/comicType"
import CartBtn from '/btncart.png'
import { useParams } from "react-router-dom"
import { setComicCart } from "../../redux/slices/cart"
import { toast } from "react-toastify"


export const ComicId=()=>{

    const params=useParams()
    const {comics}=useAppSelector(state=>state)
    const dispacth=useDispatch()
    const {comicId}=comics

    const comicCart={
        id:comicId.id,
        title:comicId.title,
        description:comicId.description,
        pageCount:comicId.pageCount,
        thumbnail:comicId.thumbnail,
          prices:[{
            type:'',
            price:comicId.prices[0].price
          }]
        }

    

        
const setComic=()=>{
  dispacth(setComicCart(comicCart))
  toast.success('adicionado ao carrinho')
}


    return <Container  p="10px" w="100%"  >

    <Container m="200px 0"  w="100%" mnh="100vh">
        <Container d="flex" mqDirection="column" >
            <Container p="12px 0"  w="40%" d="flex" mqw='100%' flexJustify="center" flexAlign="center">
                        <Image boxShadow="0 0 17px #000" bdRadius="5px" src={`${comicId.thumbnail}.jpg`}   h="100%"  w="70%"   />
            </Container>
            <Container flex="1"  p="100px 10px">
                <Title color="red" fontSize="1.656em" m="30px 0">${comics.comicId.title}</Title>
                <Text color="#e1e3e6" fontSize="1.356em" >{comicId.description}</Text>
                <Text m="20px 0" color="#eee">total de páginas :{comicId.pageCount}</Text>
                <Text m="20px 0" color="red" fontWeight="bold" fontSize="1.856em">
                  <>{comicId.prices[0].price.toFixed(2)}</> 
               </Text>
                <Container m="60px 0" d="flex" flexJustify="center">
                   <Buttom onClick={()=>setComic()} d="flex" flexJustify="center"  flexAlign="center" w="50%" trs="all ease .2s" bd="1px solid transparent" colorHover="#db3518" color="#eee" bgHover="transparent" bdHover="1px solid #db3518" bdRadius="15px"  bg="#c93b22" p="27px 30px" cursor="pointer">
                    adicionar ao carrinho<Image d="flex" bg="#1b1c1f" m="0 5px" p="15px" bdRadius="50%" src={CartBtn} h='30px' w="30px" />
                    </Buttom>
                    
                 </Container>
            </Container>
           
        </Container>

    </Container>
       
     

        
        
        
  
   
</Container>

    }