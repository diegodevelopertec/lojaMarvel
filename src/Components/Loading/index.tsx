import React from 'react';
import ReactLoading from 'react-loading';
import { Container } from '../structure/Container/Index';
import { Text } from '../structure/Text';



type Props={
   
    color:string
}


export const Loading = ({color}:Props) => {
	
    return <Container d='flex' flexJustify='center' overflow='hidden' flexAlign='center' flexDirection='column' w='100%' h='100%'>
        <ReactLoading  width={'100px'} height={'100p%'} type={'spin'}  color={color}  />
        <Text fontSize='1.453em' color='red'>carregando...</Text>
    </Container>
    
}

