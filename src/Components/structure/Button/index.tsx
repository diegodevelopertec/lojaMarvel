import {Box} from './style'
import { ReactNode } from 'react'
import { PropsComponents } from '../../../types/PropsComponents'

export const Buttom=({...propsElement}:PropsComponents)=>{
    return <Box
  
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
  
    bd={propsElement.bd}
    bdTopLeft={propsElement.bdTopLeft}
    bdTopRight={propsElement.bdRadiusTopRight}
    bdBottomLeft={propsElement.bdBottomLeft}
    bdBottomRight={propsElement.bdBottomRight}
    bdRadius={propsElement.bdRadius}
    bdRadiusTopLeft={propsElement.bdRadiusTopLeft}
    bdRadiusTopRight={propsElement.bdRadiusTopRight}
    bdRadiusBottomLeft={propsElement.bdRadiusBottomLeft}
    bdRadiusBottomRight={propsElement.bdRadiusBottomRight}
    boxShadow={propsElement.boxShadow}
    ps={propsElement.ps}
    psTop={propsElement.psTop}
    psLeft={propsElement.psLeft}
    psRight={propsElement.psRight}
    psBottom={propsElement.psBottom}
    onClick={propsElement.onClick}
    onFocus={propsElement.focus}
    mqD={propsElement.mqD}
    mqW={propsElement.mqw}
    mqH={propsElement.mqh}
    mqM={propsElement.mqm}
    mqP={propsElement.mqp}
    mqDAlign={propsElement.mqDAlign}
    mqDJustify={propsElement.mqDJustify}
    mqDirection={propsElement.mqDirection}
    cursor={propsElement.cursor}

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