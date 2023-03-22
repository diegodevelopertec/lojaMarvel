import { Container } from "../structure/Container/Index"
import { Title } from "../structure/Title"
import { Text } from "../structure/Text"
import { ComicType } from "../../types/comicType"
import { Image } from "../structure/Image"

type Props={
    comic:ComicType
}
export const CardComic=({comic}:Props)=>{
    return <Container>
        <Container h="130px">
            <Image src={comic.thumbnail} h='100%' w="1005" />
        </Container>
       <Container>
          <Title>{comic.title}</Title>
          <Text>{comic.pageCount}</Text>
          <Text>{comic.description}</Text>
          <Text>{comic.prices[0]}</Text>
       </Container>
        
    </Container>
}