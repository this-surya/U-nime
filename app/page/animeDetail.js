export default function AnimeDetail({animesDetail}){
  console.log(animesDetail);
    return(
      <div className="mb-5 w-full flex flex-wrap justify-center">
        <h1 className=" mb-5 bg-red-900 text-white w-full text-xl p-3 w-full">{animesDetail.anime_detail.title}</h1>
         <img className="h-96 mr-10" src={animesDetail.anime_detail.thumb} />
          <ul className="w-96">
            {animesDetail.anime_detail.detail.map((detail) => {
              return(
                <li>{detail}</li>
              )
            })}
          </ul>
          <div className="bg-red-900  w-4/6  px-5 h-96 overflow-y-scroll mt-5">
            {animesDetail.episode_list.map((episode) => {
              return(
                <a href={episode.episode_endpoint} target="__blank">
                <ul className="text-white bg-black p-2 border my-2">
                  <li>{episode.episode_title}</li>
                  <li>{episode.episode_date}</li>
                </ul>
                </a>
              )
            })}
          </div>
      </div>
    )
  }
  