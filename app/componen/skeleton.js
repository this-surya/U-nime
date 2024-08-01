  export function CardSkeleton(){
      const cardGroup  = []
      for(let a =0; a<12; a++){
          cardGroup.push(
              <div key={a} className="relative blur-sm
              bg-white animate-pulse m-1 text-white  mx-4 text-center text-sm">
      
                <div className="bg-white w-40  h-52"></div>
                <p className="absolute opacity-80 top-0 bg-black text-white p-1 w-10  h-3">Episode</p>
                <p className="absolute opacity-80 top-8 bg-black text-white p-1 w-10 h-3">Rating/Scedule</p>
                <h1 className="w-full absolute bottom-0 py-2 opacity-80 text-white bg-black z-10 h-10">Anime Title</h1>
              </div>
          )
      }
  
      return cardGroup;
    }

    // function animeSkeleton(){
    //   return(
    //     <div className="animate-pulse">
    //       <div className="mb-5 w-full flex flex-wrap justify-center">
    //     <h1 className=" mb-5 bg-red-900 text-white w-full text-xl p-3 w-full">{animesDetail.anime_detail.title}</h1>
    //      <img className="h-96 mr-10" src={animesDetail.anime_detail.thumb} />
    //       <ul className="w-96">
    //         {animesDetail.anime_detail.detail.map((detail) => {
    //           return(
    //             <li>{detail}</li>
    //           )
    //         })}
    //       </ul>
    //       <div className="bg-red-900  w-4/6  px-5 h-96 overflow-y-scroll mt-5">
    //         {animesDetail.episode_list.map((episode) => {
    //           return(
    //             <a href={episode.episode_endpoint} target="__blank">
    //             <ul className="text-white bg-black p-2 border my-2">
    //               <li>{episode.episode_title}</li>
    //               <li>{episode.episode_date}</li>
    //             </ul>
    //             </a>
    //           )
    //         })}
    //       </div>
    //    </div>
    //     </div>
    //   )
    // }


