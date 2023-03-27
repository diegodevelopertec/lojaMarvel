import { animated } from '@react-spring/web'
import { Container } from "../../Components/structure/Container/Index"
import { Title } from "../../Components/structure/Title"
import { Text } from "../../Components/structure/Text"
import { Image } from "../../Components/structure/Image"
import SpderMan from '/aranha.png'
import IronMan from '/ferro.png'
import Capitao from '/america.png'
import { Buttom } from '../../Components/structure/Button'
import { useNavigate } from 'react-router-dom'


export const Home=()=>{
  const navigate=useNavigate()


   return <Container m="100px 0" mqp='12px' mqw600='100%' mqw='100vw'  pHover="10px" >
           <Container color="red" >
                <Title fontSize="1.6464em"> Navegue em Novos Mundos</Title>
                <Text mqFontSize='16px' color="#eee" fontSize="1.6464em">Que tal se aventurar em diferentes mundos e explorar nessas aventuras  
                 diferentes amigos?!
                </Text>
           </Container>
           <Container mqw='100%' mqDirection='column' mqDJustify='center'
                  mqDAlign='center' w='100%' d="flex" m='50px 0'  flexAlign='center'>
             <Image src={IronMan} h='580px'  />
             <Buttom onClick={()=>navigate('/comics')} cursor='pointer'
                 fontWeight='bold' fontSize='1.456em' 
                  colorHover='red' bdHover='2px solid orange' bgHover='orange'  
                  bd='none' bdRadius='30px' p='10px 10px' color='#aaa' bg='red'>ver quadrinhos
            </Buttom>
           </Container>
    </Container>
}