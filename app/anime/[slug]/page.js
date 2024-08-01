'use client'
import { usePathname } from "next/navigation"
import { Response } from "@/app/features/animes";
import { Content } from "@/app/componen/component";

export default async function Anime(){
    const pathname = usePathname();
    const slug = pathname.split('/');


   if(slug[2] == 'ongoing'){
    const anime = await Response('ongoing/1')
    return(
        <div className='flex flex-wrap w-5/6'>
            <Content data={anime.ongoing} total={24}/>
        </div>
    )
   }

   if(slug[2] == 'completed'){
    const anime = await Response('completed/1')
    return(
        <div className='flex flex-wrap w-5/6'>
            <Content data={anime.completed} total={24}/>
        </div>
    )
   }
}