//Images
import Logo from '/navbar/logo.png'
import Profile from '/navbar/profileImg.png'

export default function IndexPage() {
  return (
    <>
      <div className="bg-[#212D57] h-[72px] flex text-white items-center box-border justify-between px-7  fixed z-10 top-0 w-full ">
        {/* logo */}
        <div className="flex items-center w-auto">
          <img src={Logo} alt="logo" />
          <h1
            className="uppercase font-bold border p-1"
            style={{
              fontFamily: 'Khand, sans-serif',
              fontStyle: 'normal',
              fontWeight: '700',
            }}
          >
            bid winner
          </h1>
        </div>
        {/* end */}

        {/* menu icons  */}
        <div className="hidden xl:block w-auto ">
          <ul
            className=" gap-10 justify-center flex"
            style={{
              fontFamily: 'Poppins,sans-serif',
              fontStyle: 'normal',
            }}
          >
            <li className="text-white cursor-pointer text-lg ">Dashboard</li>
            <li className="text-white cursor-pointer text-lg ">Jobs</li>
            <li className="text-white cursor-pointer text-lg ">Calender</li>
            <li className="text-white cursor-pointer text-lg ">Cast Catalog</li>
            <li className="text-white cursor-pointer text-lg ">Database</li>
            <li className="text-white cursor-pointer text-lg ">Tutorials</li>
          </ul>
        </div>
        {/* end */}

        {/* profile */}
        <div className="w-auto hidden sm:flex items-center gap-5">
          <div className=" flex border w-[255px] rounded-md items-center gap-2 text-right px-4">
            <div>
              <span className="text-md font-bold ">Jane Cooper</span>
              <p className="font-base">janecooper@gmail.com</p>
            </div>
            <div className="w-full h-full">
              <img src={Profile} alt="Profile" />
            </div>
          </div>
          {/* end */}

          {/* notification */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bell"
              width={28}
              height={28}
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
            <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
          </div>
        </div>
        {/* end */}

        {/* hamburgon */}
        <div className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1={4} y1={6} x2={20} y2={6} />
            <line x1={4} y1={12} x2={20} y2={12} />
            <line x1={4} y1={18} x2={20} y2={18} />
          </svg>
        </div>
        {/* end */}
      </div>
    </>
  )
}
