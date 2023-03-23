import { Container } from "../structure/Container/Index"
import { Title } from "../structure/Title"
import { Text } from "../structure/Text"
import { ComicType } from "../../types/comicType"
import { Image } from "../structure/Image"

type Props={
    comic:ComicType
}
export const CardComic=({comic}:Props)=>{
    return <Container  bg="#eee"   w='350px' m="50px ">
        <Container bg="#000" h="250px" p="12px" overflow="hidden" w="100%" d="flex" flexJustify="center">
            <Image src={comic.thumbnail} h='200px' />
        </Container>
       <Container m="30px 0">
          <Title fontSize="1.456em">{comic.title}</Title>
          <Text>{comic.pageCount}</Text>
          <Text>{comic.description}</Text>
          <Text>{comic.prices[0]}</Text>
       </Container>
        
    </Container>
}