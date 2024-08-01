import { axiosInstace } from "../lib/axios";



export const Response = async (url) => {
    const apiRes = await axiosInstace.get(`https://otakudesu-anime-api.vercel.app/api/v1/${url}`)


    if(!apiRes.ok){
        console.log('data not found')
    }
    return apiRes.data
}





// export const CallApi = ({ endpoint, page}) => {

//     const [anime, setAnime] = useState([]);
//     const [loading, setLoading] =useState(true);

//     const Response = async () => {
//         setLoading(true)
//         try {
//             const animesResponse = await axiosInstace.get(`${endpoint}/${page}`);
//             setAnime(animesResponse.data);
//         } catch (error) {
//             console.log(error);
//         }
//         setLoading(false)
//     }

//     useEffect(() => {
//         Response()
//     }, [])



//     return {
//         data: anime,
//         loading
//     }
// }