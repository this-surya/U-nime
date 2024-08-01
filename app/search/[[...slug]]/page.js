'use client'

import { Response } from "@/app/features/animes";
import { useEffect, useState } from "react"
import { Content } from "@/app/componen/component";

export default function Search(params){
    const [anime, setAnime] = useState([]);

    useEffect(() =>  {
        async function getAnime(){
            try{

                const result = await Response(`search/${params.params.slug}`);
                setAnime(result)
            }catch(e){
                console.log(e)
            }
        }
        getAnime()
    },[params.params.slug])


    // if(anime.search.length < 0 ){
    //     return(
    //         <p>Anime Not Found</p>
    //     )
    // }

    if(anime.status) {
        if(anime.search.length <= 0 ){
            return(
                <h1>Anime Not Found</h1>
            )
        }
        return(
            <div className='flex flex-wrap w-5/6'>
            <Content data={anime.search}/>
            </div>
        )
    }
    return(
    //     <>
    //     {(anime.status) ?
    //         <div className='flex flex-wrap w-5/6'>
    //             <Content data={anime.search}/>
    //         </div>
    //     :
    // <p>Please Wait..</p> 
    // }
    //     </>
    <p>please wait..</p>
    )
}