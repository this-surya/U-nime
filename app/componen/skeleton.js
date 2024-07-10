export function SkeletonCard(){
    const cardGroup  = []
    for(let a =0; a<12; a++){
        cardGroup.push(
            <div className="relative 
            bg-white animate-pulse m-1  mx-4 text-center text-sm">
    
              <div className="bg-white w-40  h-52">a</div>
              <p className="absolute opacity-80 top-0 bg-black text-white p-1 w-10  h-3"></p>
              <p className="absolute opacity-80 top-8 bg-black text-white p-1 w-10 h-3"></p>
              <h1 className="w-full absolute bottom-0 py-2 opacity-80 text-white bg-black z-10 h-10"></h1>
            </div>
        )
    }

    return cardGroup;
  }