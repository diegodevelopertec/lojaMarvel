import { Routes as Rotas,Route } from "react-router-dom"
import { FavoriteComics } from "../Pages/FavoritesComics"
import { Home } from "../Pages/Home"
import { Comics } from "../Pages/Comics"
export const Routes=()=>{

    return <Rotas>
        <Route  path='/' element={<Home />} />
        <Route  path='/comics' element={<Comics />}  />
        <Route  path='/comics/favorites' element={<FavoriteComics />}  />
    </Rotas>
}