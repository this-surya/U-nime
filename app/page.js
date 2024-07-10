'use client'

import { useEffect, useState } from "react";
import { axiosInstace } from "./lib/axios";
import { CallApi } from "./features/animes";
import {
  useQueries,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from "react-query";


import Content from "./page/content";
import Navbar from "./page/navbar";
import AnimeDetail from "./page/animeDetail";
import Jumbotron from "./page/jumbotron";
// import Pagination from "./page/pagination";
import Footer from "./page/footer";

import Header from  "./componen/header";

export default function Home() {

  const [endpoint, setEndpoint] = useState('ongoing');
  const [page, setPage] = useState('1');
  const [loading, setLoading] = useState(true)


  //request data ke api



  const { data } = CallApi({ endpoint, page, setLoading });
  const { data : completed } = CallApi({endpoint: 'completed', page: '1', setLoading});
  const { data : genres } = CallApi({endpoint: 'genres', page: '', setLoading});


  //bagian home
  return (
    <div>
      <Navbar setEndpoint={setEndpoint} setPage={setPage} setLoading={setLoading}/>

      <Page completed = {completed} data={data} endpoint={endpoint} setEndpoint={setEndpoint} setPage={setPage} loading={loading} setLoading={setLoading} genres={genres}/>
        {/* {loading ?
        <Container>
          {row}
        </Container>
          :
          <>
          </>
        } */}



      <Footer />
    </div>
  )


}


function GenreList({genres}){
   return(
    <div className="w-60 sticky top-0 scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-scroll h-screen">
    <h1 className="sticky bg-red-900 p-5 font-black text-white top-0">Genre List</h1>

    <ul className="bg-white">
      {genres.map((genre) =>{
        return(

          <li className="p-3">{genre.genre}</li>
        )
      })}
    </ul>
    </div>
   )
}

function Page({ endpoint, data, setEndpoint, setPage, setLoading, completed, genres, loading }) {
  return (
    <>
      {/* menampilkan anime list */}
      {(endpoint == 'ongoing' || endpoint == 'completed') &&
      <>

      <Jumbotron/>

      <div className="flex">
        <GenreList genres={genres} />
        <Container>

          <Header judul='Ongoing' />
          <Content data={data} endpoint={endpoint} setEndpoint={setEndpoint} setPage={setPage} loading={loading} setLoading={setLoading}/>

          <Header judul='Completed' />

        <Content data={completed} endpoint={'completed'} setEndpoint={setEndpoint} setPage={setPage} loading={loading} setLoading={setLoading}/>
        </Container>
      </div>



      </>

      }

      {
        endpoint == 'detail' &&
        <Container>
        <AnimeDetail animesDetail={data}/>
        </Container>
      }

      {/* display searching anime */}
      {
        endpoint == 'search' &&
        <Container>

        <Content data={data} endpoint={endpoint} setEndpoint={setEndpoint} setPage={setPage} setLoading={setLoading}/>
        </Container>
      }
    </>
  )
}
function Container({ children }) {
  return (
    <div className="anime w-5/6 text-white flex items-center flex-wrap justify-center w-full min-h-screen">
      {children}
    </div>
  )
}


