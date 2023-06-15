import RightBottom from './rightBottom'
import RightTop from './rightTop'

const midRight = () => {
  return (
    <>
      <div className="w-full h-full flex-row">
        <div className="w-full h-2/6 p-4">
          <RightTop />
        </div>
        <div className="w-full h-4/6 p-4 mt-[-3rem]">
          <RightBottom/>
        </div>
      </div>
    </>
  )
}

export default midRight
