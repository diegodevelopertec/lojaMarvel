import { Container } from "../structure/Container/Index"
import { Image } from "../structure/Image"
import { Text } from "../structure/Text"
import img from '/comic.jpg'
import Lixeira from '/lixeira.png'
import { Buttom } from "../structure/Button"
import { comicIdType } from "../../types/comicType"
import { removeComicCart } from "../../redux/slices/cart"
import { useDispatch } from "react-redux"
import { ComicId } from "../../Pages/ComicId"
import { toast } from "react-toastify"

type Props={
    comic:comicIdType
}




export const CardCartComic=({comic}:Props)=>{
    const dispatch=useDispatch()


    const removeCart=()=>{
      dispatch(removeComicCart(comic.id))
      toast.success('removido do carrinho')
    }

    

    return <Container trs="all ease .2s" colorHover="red" mqDirection="column"  d="flex" flexJustify="space-between" p="20px 12px" m="18px 20px" bgHover="#000" boxShadow="0 0 5px #eee">
        <Container mqw="100%"  mqD="flex" mqDJustify="center" mqDAlign="center" mqDirection="column">
           <Container d="flex" mqDirection='column' flexAlign="center">
              <Image  src={`${comic.thumbnail}.jpg`} h='85px' w="55px" mr="5px" />
              <Text color="#eeee" colorHover="red">{comic.title}</Text>
           </Container>
            <Text color="#eeee" colorHover="red">R$ {comic.prices[0].price.toFixed(2)}</Text>
        </Container>

        <Container d="flex" flexAlign="center"  flexDirection="column" flexJustify="center">
            <Buttom onClick={()=>removeCart()} trs="all ease .2s" p="12px" bg="transparent" color="red" cursor="pointer" bd="none" bdRadius="5px" d="flex" flexAlign="center">
                remover<Image src={Lixeira} h='30px' w='30px' />
            </Buttom>
        </Container>

    </Container>
}