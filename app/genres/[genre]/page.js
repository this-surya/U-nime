'use client'
import { Response } from "@/app/features/animes"
import { useEffect, useState } from "react"
import { Content, Header, Pagination } from "@/app/componen/component";

export default function Page(params){
    const [animeGenre, setAnimeGenre] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() =>{
        async function getAnimeGenres(){
            try{
                const result = await Response(`genres/${params.params.genre}/${page}`)
                setAnimeGenre(result)
            }catch(e){
                console.log(e);
            }
        }

        getAnimeGenres()
    },[page])

    return(
        <>
            {(animeGenre.status) ?
                <div className='flex flex-wrap w-5/6'>
                    <Header judul={params.params.genre}/>
                    <Content data={animeGenre.genreAnime}/>
                    <Pagination page = {page} setPage = {setPage}/>
                </div>
            :
            <p>Please Wait..</p> 
        }
            </>
    )
}