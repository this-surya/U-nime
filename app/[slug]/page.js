'use client'
import { useParams, usePathname } from 'next/navigation'
import { Response, Anime } from '../features/animes'
import { Content, Header, Pagination, SideBar } from '../componen/component'
import { useEffect, useState } from 'react'

export default function SlugHandler(params){
    const [anime, setAnime] = useState([]);
    

    useEffect(() => {
            async function getAnime(){
                try{
                    const result = await Response(`detail/${params.params.slug}`)

                    setAnime(result);
                }
                catch(e){
                    console.log(e);
                }
            }

            getAnime()
    },[])


    if(params.params.slug == 'ongoing'){
    const [ongoing, setAnimeOngoing] = useState([]);
    const [page , setPage] = useState(1);

        useEffect(() => {
            async function getAnimeOngoing(){
                try{
                    const result = await Response('ongoing/2');
                    setAnimeOngoing(result);
                }catch(e){
                    console.log(e);
                }
            }

            getAnimeOngoing()
        },[])
        return(
            <>
            {(ongoing.status) ?
                <div className='flex flex-wrap w-5/6'>
                    <Content data={ongoing.ongoing} total={24}/>
                    <Pagination page={page} setPage={setPage}/>
                </div>
            :
            <p>Please Wait..</p> 
        }
            </>
        )
    }

    if(params.params.slug == 'completed'){
        const [animeCompleted, setAnimeCompleted] = useState([])
        const [page, setPage] = useState(1);
        useEffect(() => {
            async function getAnimeCompleted(){
                try{
                    const result = await Response(`completed/${page}`);
                    setAnimeCompleted(result);
                }catch(e){
                    console.log(e);
                }
            }
            getAnimeCompleted()
        },[page])
        return(
            <>
            {(animeCompleted.status) ?
                <div className='flex flex-wrap w-5/6'>
                    <Content data={animeCompleted.completed} total={24}/>
                    <Pagination page={page} setPage={setPage}/>
                </div>
            :
            <p>Please Wait..</p> 
        }
            </>
        )
    }
    if(!anime.status){
        return(
            <p>Loading...</p>
        )
    }

    return(
        // <p>hallo{anime.anime_detail.title}</p>
        <>
        {(!anime.anime_detail.title == "") ?
            <AnimeDetail anime={anime}/>    
            :
            <p>Anime Not found</p>
    }
        </>
    )

}

function AnimeDetail({anime}){
    // console.log(anime.episode_list[1].episode_endpoint);
    const cekStatus = (anime.anime_detail.detail[5] == "Status: Completed" ) ? 2 : 1
    const FirstEpisode = anime.episode_list.length - cekStatus;
    const endpoint = anime.episode_list[FirstEpisode].episode_endpoint.split('/')

    const [slug, setSlug] = useState(endpoint[3]);

    const [episode, setEpisode] = useState([]);
    
    useEffect(() => {
        async function getEpisode(){

            try{
                const result = await Response(`episode/${slug}`);
                setEpisode(result)
            }catch(e){
                console.log(e);
            }
        }

        getEpisode()
        }, [slug])




    return(
        <div className='flex bg-slate-950'>
           <SideBar items={anime.episode_list} title={'Episode List'} list={'episode'} setSlug={setSlug} episodeActive={episode.title}/>
           <div className='w-full text-white'> 
            <Header judul={episode.title} />
           <div className="w-full relative pb-[56.25%] mb-3">
                <iframe className="absolute w-full h-full" src={episode.streamLink}  allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" frameBorder="0" width="448" height="252"></iframe>
            </div>
                {/* <video className="w-full" controls>
                <source src="trailer/trailer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video> */}
                <div className="flex m-5">
                    <img className="w-40" src={anime.anime_detail.thumb} />
                    <ul className="m-5"> 
                    {anime.anime_detail.detail.map(( item, index) => {
                        return(
                            <li key={index}>{item}</li>
                        )
                    })}
                    </ul>
                </div>
                {anime.anime_detail.sinopsis.length > 0 &&
                <>
                    <Header judul={'Sinopsis'} />
                    <p className='mx-20 my-10'>{anime.anime_detail.sinopsis}</p>
                </>
                }

           </div>
        </div>
    )
}