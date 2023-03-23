import { CardComic } from "../../Components/CardComic"
import { Container } from "../../Components/structure/Container/Index"
import { Title } from "../../Components/structure/Title"
import { useAppSelector } from "../../hooks/useAppSelector"


export const Comics=()=>{

    const {comics}=useAppSelector(state=>state)


    return <Container bg="red"  h="900px" p="10px"  >
            <Title>Quadrinhos</Title>

            <Container bg="orange" h="600px">
                {comics.length > 0 && comics.map((i,k)=>(
                    <CardComic comic={i}  key={k} />
                ))}
            </Container>
    </Container>
}