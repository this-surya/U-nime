import { Response } from "./features/animes";
import  { 
   SideBar, 
  Jumbotron, Content,  Header, Cardxl, 
  Pagination} from "./componen/component";
// import { useEffect, useState } from "react";

export default async function Home() {


  const animeGenre = await Response("genres/anime");
  // const animeOngoing = await Response("ongoing/1");
  const animeRecomendation = await Response("anime/20/recommendations/");
  // console.log(animeRecomendation.data);
  // const animeAction = await Response("genres/action/1");

  // const [animeGenre, setAnimeGenre] = useState([])
  // const [animeOngoing, setAnimeOngoing] = useState([])
  // const [animeCompleted, setAnimeCompleted] = useState([])
  // const [animeAction, setAnimeAction] = useState([]);


  // useEffect(() => {
  //   async function getGenre(){
  //    try{
  //     const result = await Response("genres")
  //     setAnimeGenre(result);
  //    }catch(e){
  //     console.log(e)
  //    }
  //   }
  //   getGenre()
  // }, [])

  // useEffect(() =>{

  //   async function getAnimeOngoing(){

  //     try{
  //       const result = await Response('ongoing/1')
  //       setAnimeOngoing(result)
  //     }catch(e){
  //       console.log(e)
  //     }
  //   }

  //   getAnimeOngoing()
  // }, [])

  // useEffect(() => {
  //   async function getAnimeCompleted(){

  //     try{
  //       const result = await Response("completed/1")
  //       setAnimeCompleted(result)
  //     }catch(e){
  //       console.log(e)
  //     }
  //   }
  //   getAnimeCompleted()
  // })

  // useEffect(() =>{
  //   async function getAnimeAction(){
      
  //     try{
  //       const result = await Response('genre/action')
  //       setAnimeAction(result);
  //     }catch(e){
  //       console.log(e);
  //     }

  //     getAnimeAction()
  //   }
  // })
  


  //bagian home
  return (
    <div className="bg-slate-950">
      <div className="flex">
      <SideBar items={animeGenre.data} title={'Genre List'} list={'genre'} />
      <Container>
        <Jumbotron/>
        {/* <Header judul={'Action'} />
        <Cardxl data={animeAction.genreAnime} /> */}
        <Header judul = 'Recommendation'/>
        <Content data={animeRecomendation.data} total={12}/>

        {/* <Header judul = 'Completed'/> */}
        {/* <Content data={animeCompleted.completed} total={12}/> */}
      </Container>
      </div>
    </div>
  )


}

function Container({ children }) {
  return (
    <div className="w-5/6 text-white flex relative flex-row min-h-screen justify-between flex-wrap">
      {children}
    </div>
  )
}


