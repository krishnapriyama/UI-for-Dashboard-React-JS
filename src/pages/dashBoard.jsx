import Navbar from '../components/navBar'
import SideBar from '../components/sideBar'
import MidLeft from '../components/midLeft'
import MidRight from '../components/midRight'

const dashBoard = () => {
  return (
    <div className="w-full ">
      <Navbar />
      
      <div className="flex mt-[72px]">
        <div className="w-[6rem]">
          <SideBar />
        </div>
        <div className="w-full flex bg-[#F2F6F9]">
          <div className="w-1/3 h-full">
            <MidLeft />
          </div>
          <div className="w-2/3">
            <MidRight />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default dashBoard
