export default function Navbar({ setEndpoint, setPage, setLoading}) {


    function handleClick(changeLayout, changePage) {
      setEndpoint(changeLayout)
      setPage(changePage)
      setLoading(true)
    }
    return (
      <div className="flex justify-between bg-black text-white text-sm p-1 md:p-5 w-full items-center ">
        <h1 className="text-white cursor-pointer hover:text-gray-500 text-2xl " onClick={() => {handleClick('', '1')}}>👾U-nime</h1>
        <div className="flex items-center">
          <ul className="text-white font-black md:flex mr-5 hidden">
            <li className="mx-2 cursor-pointer hover:text-gray-500  " onClick={() => {
              handleClick('ongoing', '1')
            }}>Ongoing</li>
            <li className="mx-2 cursor-pointer hover:text-gray-500  " onClick={() => {
              handleClick('completed', '1');
            }}>Completed</li>
          </ul>
          <input className="w-28 md:w-52 md:p-2 text-black" type="text"
            placeholder="cari.." onChange={(e) => { handleClick('search', e.target.value) }} />
        </div>
            <h1 className="text-white">surya</h1>
      </div>
    )
  }