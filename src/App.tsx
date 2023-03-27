import { Container } from "./Components/structure/Container/Index"
import { HeaderApp } from "./Components/HeaderApp"
import { Text } from "./Components/structure/Text"
import { Routes } from "./Routes"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 const App=()=>{
   return <Container mnh='100vh' w="100vw">
    <HeaderApp />
    <Container bg="#1b1c1f" w="100%" d="flex" flexJustify="center">
      <Container mnh="100vh" mqw600="100vw"   w="85%" p="12px" mqw='100vw' pHover="5px">
        <Routes />
        <ToastContainer />
      </Container>

    </Container>
  <Container bg="#000" color="red" h="350px" d="flex" flexJustify="center" flexAlign="center">
    <Text>Desenvolvido por Diego Morais</Text>
  </Container>

    
  
  
  </Container>
}

export default App