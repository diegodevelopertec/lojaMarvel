import { Container } from "../../Components/structure/Container/Index"
import { Title } from "../../Components/structure/Title"
import { Text } from "../../Components/structure/Text"
import { Image } from "../../Components/structure/Image"
import cartIcon from '/cartIcon.png'
import { CardCartComic } from "../../Components/CardCartComic"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useState,useEffect } from "react"
 


export const Cart=()=>{

    const {cart}=useAppSelector(state=>state)
    const [comicsCart,setComicsCart]=useState(cart.comicsCart)

useEffect(() => {
    setComicsCart(comicsCart)
}, [comicsCart,cart.comicsCart])
    return <Container w="100%" mqw='100vw' mnh="100vh" p="100px 0">
        <Container mqp="12px">
            <Title fontSize="1.856em" d="flex" color="red" flexAlign="center">Carrinho<Image src={cartIcon} h='60px' w="60px" /></Title>
            <Text color="#eee">Acompanhe aqui os seus produtos desejados e efetue a compra:</Text>
        </Container>

        <Container w="100%" d="flex" flexJustify="center">
           <Container w="80%" m="30px 0">
            {
                    comicsCart.map((i,k)=>(
                        <CardCartComic comic={i} key={k} />
                    ))
                    
                }
           </Container>
        </Container>
    </Container>
}