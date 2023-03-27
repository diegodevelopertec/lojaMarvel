import { Routes as Rotas,Route } from "react-router-dom"
import { FavoriteComics } from "../Pages/FavoritesComics"
import { Home } from "../Pages/Home"
import { Comics } from "../Pages/Comics"
import { ComicId } from "../Pages/ComicId"
import { Cart } from "../Pages/Cart"
export const Routes=()=>{

    return <Rotas>
        <Route  path='/' element={<Home />} />
        <Route  path='/comics/' element={<Comics />}  />
        <Route  path='/comics/:id' element={<ComicId />}  />
        <Route  path='/comics/favorites' element={<FavoriteComics />}  />
        <Route  path='/comics/cart' element={<Cart />}  />
    </Rotas>
}