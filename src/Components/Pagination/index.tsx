import { Container } from "../structure/Container/Index"
import { List } from "../structure/List"
import { ListItem } from "../structure/ListItem"
import { useState } from "react"
import { Buttom } from "../structure/Button"
const maxItems=9
const maxItemsLeft=(maxItems - 1) / 2

type Props={
    limit:number,
    offset:number,
    totalPage:number,
    setOffSet:(num:number)=>void

  
}

export const Pagination=({limit,offset,totalPage,setOffSet}:Props)=>{
      
        const current= offset ? offset / limit + 1 : 1
        const pages=Math.ceil(totalPage / limit)
        const first=Math.max(current - maxItemsLeft,1)




    return <List  m="60px 0" p="12px" w="100%" d="flex" flexJustify="center">
        {Array.from({length:maxItems}).map((_,index)=>(index + first)).map((page,k)=>(
              <Buttom key={k} onClick={()=>setOffSet((pages -1) * limit)}  cursor="pointer" bg={ '#aaaa'} d="flex" m="0 5px " flexJustify="center"  flexAlign="center" bdRadius="100%" w="50px" h="50px">
              { page}
           </Buttom>
        ))}
    </List>
}