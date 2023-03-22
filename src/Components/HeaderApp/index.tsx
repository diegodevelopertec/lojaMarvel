import { Header } from "../structure/Header/indext"
import { Container } from "../structure/Container/Index"
import { Image } from "../structure/Image"
import { Connection } from "../structure/Connection"
import Logo from '/logo.png'
import { Buttom } from "../structure/Button"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import AbrirMenu from './menumobile.png'
import FecharMenu from './fechar.png'


export const HeaderApp=()=>{
    const [startMobile,setStartMobile]=useState()
  

    return <Header bg="#2b2929" p="20px 0" d="flex" flexJustify="space-between" >
        <Container>
            <Image src={Logo} h="50px" w="140px" />
        </Container>
        <Container d="none" mqD={startMobile ? 'flex' : 'none'}>
            <Buttom w="50px" h="50px">abrir</Buttom>
        </Container>
        <Container d="flex" flexJustify="center" fontSize="1.1645em"  color="#eee" flexAlign="center" m="0 20px">
            <Container d="none" mqD={startMobile ? 'flex' : 'none'} >
                <Buttom w="50px" h="50px">abrir</Buttom>
            </Container>
            <Container h="100%" d="flex" flexJustify="center" flexAlign="center" >
                <Connection cursor="pointer" color="#eee" textDecoration="none"  href={'/'} m="0 12px"  p="10px" colorHover="#2b2929"  bgHover="#d1271b" >Inicio</Connection>
                <Connection   cursor="pointer" color="#eee"  textDecoration="none" href={'/comics'}  m="0 12px"  p="10px"  colorHover="#2b2929"  bgHover="#d1271b" >Revistas</Connection>
                <Connection  cursor="pointer" color="#eee" textDecoration="none" href={'/comics/favorites'}  m="0 12px"  p="10px"  colorHover="#2b2929"  bgHover="#d1271b">Favoritos</Connection>
            </Container>
        </Container>
    </Header>
}