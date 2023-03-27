

type dataType={
  count:number,
  limit:number,
  results:[],
  total:number
}

export type ComicApi={
  data:dataType,
  attributionText:string,
  copyright:string,
  
}
export type ComicType={
  id:number,
  title:string,
  description:string,
  pageCount:number,
  prices:[{
    type:string,
    price:number
  }]
  thumbnail:{
    path:string,
    extension:string
  }

}

export type comicIdType={
  id:number,
  title:string,
  description:string,
  pageCount:number,
  prices:[{
        type:'',price:0
    }],

  thumbnail:string
}


