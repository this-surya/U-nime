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

export default function Home() {

  const [endpoint, setEndpoint] = useState('ongoing');
  const [page, setPage] = useState('1');
  const [slug, setSlug] = useState('');
  const [loading, setLoading] = useState(true)


  //request data ke api



  const { data } = CallApi({ endpoint, page, setLoading });
  const { data : completed } = CallApi({endpoint: 'completed', page: 1, setLoading});

  console.log(completed);


  // if(loading){
  //   console.log('Mengambil data...')
  // }else{
  //   console.log(data);
  // }

  //bagian home
  return (
    <div className="flex flex-wrap justify-center">
      <Navbar setEndpoint={setEndpoint} setPage={setPage} setLoading={setLoading}/>

        {loading ?
        <BlankCard/>
          :
          <>
          <Page completed = {completed} data={data} endpoint={endpoint} setEndpoint={setEndpoint} setPage={setPage} setLoading={setLoading}/>
          </>
        }



      <Footer />
    </div>
  )


}

function BlankCard(){
  return(
    <> 
          <div className="w-40 h-60 m-5 bg-white">
            <h1></h1>
          </div>
          <div className="w-40 h-60 m-5 bg-white">
            <h1></h1>
          </div>
          <div className="w-40 h-60 m-5 bg-white">
            <h1></h1>
          </div>
          <div className="w-40 h-60 m-5 bg-white">
            <h1></h1>
          </div>
          <div className="w-40 h-60 m-5 bg-white">
            <h1></h1>
          </div>
        </>
  )
}
function Page({ endpoint, data, setEndpoint, setPage, setLoading, completed }) {
  return (
    <>
      {/* menampilkan anime list */}
      {(endpoint == 'ongoing' || endpoint == 'completed') &&
      <>

      <Jumbotron/>
      <Container>

        <h1 className="text-white font-black text-xl w-full bg-red-900 py-5 text-center">Completed</h1>

        <Content data={data} endpoint={endpoint} setEndpoint={setEndpoint} setPage={setPage} setLoading={setLoading}/>

      </Container>

      <Container>

        <h1 className="text-white font-black text-xl w-full bg-red-900 py-5 text-center">Completed</h1>

        <Content data={completed} endpoint={'completed'} setEndpoint={setEndpoint} setPage={setPage} setLoading={setLoading}/>
      </Container>



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
    <div className="anime text-white flex items-center flex-wrap justify-center w-full min-h-screen  mb-20">
      {children}
    </div>
  )
}


