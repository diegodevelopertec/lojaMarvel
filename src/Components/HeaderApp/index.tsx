import { Header } from "../structure/Header/indext"
import { Container } from "../structure/Container/Index"
import { Image } from "../structure/Image"
import { Connection } from "../structure/Connection"
import Logo from '/logo.png'
import { Buttom } from "../structure/Button"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AbrirMenu from '/menumobile.png'
import FecharMenu from '/fechar.png'
import { useAppSelector } from "../../hooks/useAppSelector"
import { useDispatch } from "react-redux"
import {toggleMenu} from './../../redux/slices/menuMobile'

export const HeaderApp=()=>{
    const {menu}=useAppSelector(state=>state)
    const dispacth=useDispatch()
    const navigate=useNavigate()

    const setNavigate=(href:string)=>{
        navigate(`${href}`)
       toggleMenu()
    }

    return <Header bg="#2b2929" p="20px 12px" d="flex"  flexJustify="space-between" >
        <Container>
            <Image src={Logo} h="50px" w="140px" />
        </Container>
        <Container d="none" mqD={!menu ? 'flex' : 'hidden'}>
            <Buttom w="50px" h="50px" d="flex" flexJustify="center" flexAlign="center" onClick={()=>dispacth(toggleMenu())}>
                <Image src={AbrirMenu}  />
            </Buttom>
        </Container>

        <Container d="flex" flexJustify="center" h="100%" flexAlign="center"  
            mqPosition="fixed"
            mqTop="0"
            mqRight="0"
            mqBottom="0"
            mqDirection="column"
            mqDJustify='start'
            bg="#2b2929" 
            mqw={menu ? '65vw' : '0'}
            trs="all ease .2s"
            mqD={menu ? 'flex' : 'hidden'}
        
        >
                <Container d="none" mqw='100%'  mqD='flex' mqDJustify="end">
                    <Buttom w="50px" bg='transparent' mqm="30px" bd="none" h="50px" d="flex" flexJustify="center" flexAlign="center" >
                        <Image src={FecharMenu} onClick={()=>dispacth(toggleMenu())} />
                    </Buttom>
                </Container>

            
              <Container d="flex" flex="1" mqDJustify="center" mqDirection="column" flexAlign="center" flexJustify="center" m="0 45px" mqm="0"  >
                <Connection bdRadius="35px 14px" colorHover='#aaa' cursor="pointer" color="#eee" textDecoration="none" href={'/'} m="0 12px"  p="13px"   bgHover="#d1271b" >Inicio</Connection>
                <Connection bdRadius="35px 14px"  colorHover='#aaa'  cursor="pointer" color="#eee"  textDecoration="none" href={'/comics'}  m="0 12px"  p="13px"    bgHover="#d1271b" >Revistas</Connection>
                <Connection bdRadius="35px 14px"   colorHover='#aaa' cursor="pointer" color="#eee" textDecoration="none"  href={'/comics/favorites'}  m="0 12px"  p="13px"   bgHover="#d1271b">Favoritos</Connection>
                <Connection bdRadius="35px 14px"   colorHover='#aaa' cursor="pointer" color="#eee" textDecoration="none"  href={'/comics/cart'}  m="0 12px"  p="13px"   bgHover="#d1271b">Carrinho</Connection>
              
              </Container>

        </Container>



        
    </Header>
}