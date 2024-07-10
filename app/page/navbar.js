export default function Navbar({ setEndpoint, setPage, setLoading}) {
    function handleClick(changeLayout, changePage) {
      setEndpoint(changeLayout)
      setPage(changePage)
      setLoading(true)
    }
    return (
      <div className="flex justify-between bg-black text-m p-5 w-full items-center">
        <h1 className="text-white cursor-pointer  " onClick={() => {handleClick('ongoing', '1')}}>👾U-nime</h1>
        <div className="flex items-center">
          <ul className="text-white flex mr-5">
            <li className="mx-2 cursor-pointer  " onClick={() => {
              handleClick('ongoing', '1')
            }}>Ongoing</li>
            <li className="mx-2 cursor-pointer  " onClick={() => {
              handleClick('completed', '1');
            }}>Completed</li>
          </ul>
          <input className="w-52 p-2" type="text"
            placeholder="cari.." onChange={(e) => { handleClick('search', e.target.value) }} />
        </div>
      </div>
    )
  }