import { Container } from "./Components/structure/Container/Index"
import { HeaderApp } from "./Components/HeaderApp"
import { Text } from "./Components/structure/Text"
import { Routes } from "./Routes"



 const App=()=>{
   return <Container mnh='100vh' w="100vw">
    <HeaderApp />
    <Container w="100%" d="flex" flexJustify="center">
      <Container   w="80%" mqw="100vw">
        <Routes />
      </Container>

    </Container>
  <Container bg="#000" color="red" h="350px" d="flex" flexJustify="center" flexAlign="center">
    <Text>Desenvolvido por Diego Morais</Text>
  </Container>

    
  
  
  </Container>
}

export default App