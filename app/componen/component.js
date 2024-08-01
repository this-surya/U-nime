'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"
import { Response } from "../features/animes";
export function Navbar() {

    const pathname = usePathname()
    const router = useRouter()

    function handleSearch(move, anime) {
      router.push(`${move}/${anime}`);
    }

    return (
      <div className="flex justify-between flex-wrap bg-black text-white text-sm p-1 md:p-5 w-full items-center " id="Nav">
        <Link href='/'>
          <h1 className="text-white cursor-pointer transition ease-out hover:text-gray-500 text-2xl ">👾U-nime</h1>
        </Link>
        <div className="flex items-center">
          <ul className=" font-black md:flex mr-5 hidden">
            <Link href='ongoing'>
            <li className={`mx-2 cursor-pointer ${pathname == '/anime/ongoing' ? 'text-gray-500' : ''} transition ease-out hover:text-gray-500`}>Ongoing</li>
            </Link>
            <Link href='completed'>
            <li className="mx-2 cursor-pointer transition ease-out hover:text-gray-500 ">Completed</li>
            </Link>
          </ul>
          <input className="w-28 md:w-52 md:p-2 text-black" type="text"
            placeholder="cari.." onChange={(e) => { handleSearch('/search', e.target.value) }} />
        </div>
      </div>
    )
  }
export function Pagination({page, setPage}){
  return(
    <div className="w-full flex justify-center ">
      <ul className="flex justify-between px-5 bg-indigo-500 w-40  m-5 rounded text-xl">
        <li className={`${(page == page-1) ? "transition ease-out bg-white text-black" : ""} hover:cursor-pointer w-full text-center mx-2`} onClick={() => {setPage(page - 1)}}>{(page - 1 == 0) ? "" : page-1}</li>
        <li className={`${(page == page) ? "transition ease-out bg-white text-black" : ""} hover:cursor-pointer w-full text-center mx-2`} onClick={() => {setPage(page)}}>{page}</li>
        <li className={`${(page == page+1) ? "transition ease-out bg-white text-black" : ""} hover:cursor-pointer w-full text-center mx-2`} onClick={() => {setPage(page + 1)}}>{page +1}</li>
      </ul>
    </div>
  )
}

export function Footer() {
    return (
      <div className="p-5 bg-black text-white w-full text-center -bottom-16 absolute flex justify-between">
        <p>&copy;2024 by Surya Ahmad Afandi</p> 
        <p> Made by Next | React Js</p>
      </div>
    )
  }
  
export function SideBar({items, title, list, setSlug, episodeActive}){

    async function handleClick(endpoint){
      // const eps = endpoint.split('/')
      // alert(endpoint);

      
      const urlEndpoint = endpoint.split('/')
      setSlug(urlEndpoint[3])
    }

    return(
     <div className="bg-blac k min-w-60 max-w-96 sticky md:inline-block text-white scrollbar-thin top-0 overflow-y-scroll h-screen hidden">
     <h1 className="sticky bg-black p-5 top-0 border-2 border-black border-b-indigo-500">{title}</h1>

 
     <ul className="">
       {items.map((item, index) =>{
         if(list == 'genre'){
          return(
            <Link href={`genres/${item.endpoint}`}>
             <li key={index} className="p-3 cursor-pointer hover:bg-blue-500 border-2 border-black border-b-gray-400">{item.genre}</li>
            </Link>
          )
         }
         if(list == 'episode'){
          return(
              <li key={index} className={`p-3 cursor-pointer hover:bg-blue-500 border-2 border-black border-b-gray-400 ${(item.episode_title == episodeActive) ? " bg-blue-500" : ""}`}
              onClick={() => {handleClick(item.episode_endpoint)}}>{item.episode_title}</li>
          )
         }
       })}

     </ul>
     </div>
    )
 }

export function Jumbotron() {
    return (
      <div className="relative w-full md:h-96">
        <img className="w-full md:h-96" src='https://media1.tenor.com/m/8ufvqab7BnwAAAAd/demon-slayer-kimetsu-no-yaiba.gif' />
        <div className="absolute bottom-4 w-full text-center">
          <input className="mx-5" type='radio' />
          {/* <input className="mx-5" type='radio' onClick={() => {setImgUrl('https://media1.tenor.com/m/qnuatysdPEYAAAAd/gojo-gojo-satoru.gif')}} />
          <input className="mx-5" type='radio' onClick={() => {setImgUrl('https://media1.tenor.com/m/r3jf1SCoP_QAAAAd/wano-one-piece.gif')}}/> */}
        </div>
      </div>
    )
  }



export function Content({ data, total }) {

  const router = useRouter()

  const handleClick = (url) => {
    const split = url.split('/')
    if(split[3] == "anime") {
      router.push(`/${split[4]}`)
    }else{
      router.push(`/${split[3]}`)
    }
    // alert(split[3]);
  }

  return data.slice(0, total).map((anime, index) => {
    const getAnimeEndpoint = (anime.endpoint == undefined) ? anime.link : anime.endpoint;

      return (
        <div key={index} className="relative  transition ease-in-out
       m-1 w-28 md:w-44 md:mx-4 mx-1 text-center text-sm cursor-pointer hover:scale-105"
       
        onClick={() => {handleClick(getAnimeEndpoint)}}>

          <img src={anime.thumb} />
          <p className="absolute opacity-80 top-0 bg-black text-white p-1">{anime.total_episode}</p>
        <p className="absolute opacity-80 top-8 bg-black text-white p-1">{anime.updated_on}</p>
        {/* {endpoint === 'completed' &&
        <p className="absolute opacity-80 bottom-20 right-0 bg-blue-500 text-white p-1">&#9733;{anime.score}</p>
      }
      {endpoint === 'ongoing' &&
      <p className="absolute opacity-80 bottom-20 right-0 bg-blue-500 text-white p-1">&#9733;{anime.updated_day}</p>
    } */}
          <h1 className="w-full absolute bottom-0 py-2 
          opacity-80 text-white bg-black z-10 truncate">
            {anime.title.slice(0, 16)}
          </h1>
        </div>
      )
    })
}



export function Header({judul}){
  return(
      <h1 className="text-white font-black text-xl w-full bg-slate-900 py-2 text-center border-2 border-black border-b-indigo-500">{judul}</h1>
  )
}

export function Cardxl({data}){
  return(
    <div  className="flex p-3">
      {data.slice(1,3).map((index, anime) => {
        return(
          <div key={index} className="flex bg-slate-900 m-5 p-1 rounded-md w-5/6 h-52">
            <img className="w-40" src={anime.thumb} />
            <div className="flex flex-col p-3 text-ellipsis overflow-hidden">
              <h1 className="font-bold text-xl border-2 border-slate-900 border-b-indigo-500 truncate">{anime.title}</h1>
              <ul>

              {/* { 
                anime.genre.map((genre) => {
                  return(
                    <li>-{genre}</li>
                  )
                })
              } */}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}