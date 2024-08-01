import { useState } from "react"

export default function Jumbotron() {
  const [imgUrl, setImgUrl] = useState('https://media1.tenor.com/m/8ufvqab7BnwAAAAd/demon-slayer-kimetsu-no-yaiba.gif');
    return (
      <div className="relative w-full md:h-96">
        <img className="w-full md:h-96" src={imgUrl} />
        <div className="absolute bottom-4 w-full text-center">
          <input className="mx-5" type='radio' onClick={() => {setImgUrl('https://media1.tenor.com/m/8ufvqab7BnwAAAAd/demon-slayer-kimetsu-no-yaiba.gif')}}/>
          <input className="mx-5" type='radio' onClick={() => {setImgUrl('https://media1.tenor.com/m/qnuatysdPEYAAAAd/gojo-gojo-satoru.gif')}} />
          <input className="mx-5" type='radio' onClick={() => {setImgUrl('https://media1.tenor.com/m/r3jf1SCoP_QAAAAd/wano-one-piece.gif')}}/>
        </div>
      </div>
    )
  }