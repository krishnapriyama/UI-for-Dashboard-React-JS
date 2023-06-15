import Vec1 from '/sidebar/vec1.png'
import Vec2 from '/sidebar/vec2.png'

const sideBar = () => {
  const itemList = [
    { id: 1, text: 'Notes', image: Vec2 },
    { id: 2, text: 'Take off', image: Vec2 },
    { id: 3, text: 'Extension', image: Vec2 },
    { id: 4, text: 'DiLb', image: Vec2 },
    { id: 5, text: 'IncLb', image: Vec2 },
    { id: 6, text: 'LbFac', image: Vec2 },
    { id: 7, text: 'LbEsc', image: Vec2 },
    { id: 8, text: 'IndLb', image: Vec2 },
    { id: 9, text: 'Sbcon', image: Vec2 },
    { id: 10, text: 'Gen Exp', image: Vec2 },
    { id: 11, text: 'Qt Mat', image: Vec2 },
    { id: 12, text: 'Brk Dwn', image: Vec2 },
  ]
  return (
    <>
    {/* Previous button */}
      <div className="justify-center bg-[#3153CD] h-20 flex items-center">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <img src={Vec1} className="mb-1" />
            <h1 className="text-white text-[12px]">Back to Jobs</h1>
          </div>
        </div>
      </div>
      {/* end */}

{/* list */}
      <div className="flex items-center justify-center mt-6">
        <ul className="divide-y-2">
          {itemList.map((item) => (
            <li
              key={item.id}
              className="flex justify-center h-20 items-center py-4"
            >
              <div className="w-full">
                <div className="flex flex-col items-center justify-center">
                  <img src={item.image} alt={`Image ${item.id}`} />
                  <h1 className="text-gray-700 text-sm ">{item.text}</h1>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* end */}
    </>
  )
}

export default sideBar
