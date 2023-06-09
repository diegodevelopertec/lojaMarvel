import {Box} from './style'
import { PropsComponents } from '../../../types/PropsComponents'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../../redux/slices/menuMobile'


export const Connection=({...propsElement}:PropsComponents,)=>{
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const clickEvent=(e:any)=>{
    e.preventDefault()
    navigate(`${propsElement.href}`)
    dispatch(toggleMenu())
    
  }






    return <Box
    
    onClick={clickEvent}
    href={propsElement.href}
    bgHover={propsElement.bgHover}
    bdHover={propsElement.bdHover}
    colorHover={propsElement.colorHover}
    pHover={propsElement.pHover}
    mHover={propsElement.mHover}
    opacityHover={propsElement.opacityHover}
    w={propsElement.w}
    trs={propsElement.trs}
    d={propsElement.d}
    flexJustify={propsElement.flexJustify}
    flexAlign={propsElement.flexAlign}
    flexDirection={propsElement.flexDirection}
    cursor={propsElement.cursor}
    h={propsElement.h}
    m={propsElement.m}
    mt={propsElement.mt}
    mb={propsElement.mb}
    ml={propsElement.ml}
    mr={propsElement.mr}
    p={propsElement.p}
    pt={propsElement.pt}
    pb={propsElement.pb}
    pl={propsElement.pl}
    pr={propsElement.pr}
    bg={propsElement.bg}
    bgImage={propsElement.bgImage}
    bgSize={propsElement.bgSize}
    opacity={propsElement.bgSize}
    
    color={propsElement.color}
    textAlign={propsElement.textAlign}
    textTransform={propsElement.textTransform}
    overflow={propsElement.overflow}
    fontWeight={propsElement.fontWeight}
    fontSize={propsElement.fontSize}
    textDecorationHover={propsElement.textDecorationHover}
    bd={propsElement.bd}
    bdTopLeft={propsElement.bdTopLeft}
    bdTopRight={propsElement.bdRadiusTopRight}
    bdBottomLeft={propsElement.bdBottomLeft}
    bdBottomRight={propsElement.bdBottomRight}
    bdRadius={propsElement.bdRadius}
    bdRadiusTopLeft={propsElement.bdRadiusTopLeft}
    bdRadiusTopRight={propsElement.bdRadiusTopLeft}
    bdRadiusBottomLeft={propsElement.bdRadiusBottomLeft}
    bdRadiusBottomRight={propsElement.bdBottomRight}
    boxShadow={propsElement.boxShadow}
    ps={propsElement.ps}
    psTop={propsElement.psTop}
    psLeft={propsElement.psLeft}
    psRight={propsElement.psRight}
    psBottom={propsElement.psBottom}
    onFocus={propsElement.focus}
    mqD={propsElement.mqD}
    mqW={propsElement.mqw}
    mqH={propsElement.mqh}
    mqM={propsElement.mqm}
    mqP={propsElement.mqp}
    mqDAlign={propsElement.mqDAlign}
    mqDJustify={propsElement.mqDJustify}
    mqDirection={propsElement.mqDirection}
    textDecoration={propsElement.textDecoration}
    mqMnh={propsElement.mqmnh}
    mqMnw={propsElement.mqmnw}
    minH={propsElement.mnh}
    minW={propsElement.mnw}
    maxH={propsElement.mxh}
    maxW={propsElement.mxw}
    >
      {propsElement.children}

    </Box>
}