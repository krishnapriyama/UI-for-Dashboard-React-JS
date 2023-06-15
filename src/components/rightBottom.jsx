import { useState } from 'react'
import Search from '../../public/mid/search.png'
import Vector from '../../public/mid/vec2.png'
import Arrow from '../../public/mid/vec3.png'
import Delete from '../../public/mid/delete.png'

const RightBottom = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const items = [
    {
      name: '2”x4” Drop-in T-Bar (1/2” Flex)',
      length: '100 M',
      quantity: '-',
    },
    {
      name: '1”x4” Surface Fluor Fixt',
      length: '-',
      quantity: '120',
    },
    {
      name: '1/2” EMT DC SS Connector',
      length: '-',
      quantity: '270',
    },
    {
      name: '2”x4” Drop-in T-Bar (1” Flex)',
      length: '1200 M',
      quantity: '-',
    },
    {
      name: '3” EMT DC SS Connector',
      length: '-',
      quantity: '500',
    },
    {
      name: '2”x6” Surface Fluor Fixt',
      length: '-',
      quantity: '1200',
    },
  ]

  return (
    <div
      className="h-full p-3"
      style={{
        fontFamily: 'Poppins,sans-serif',
        fontStyle: 'normal',
      }}
    >
      <div className=" flex-row h-full">
        <div className="h-1/6 flex ">
          <div className="flex gap-2 items-center h-full 2xl:gap-28 lg:gap-8">
            <div className="relative  border rounded-xl shadow-md p-4 lg:p-2 lg:w-[22rem] bg-white  items-center justify-start flex ">
              <img src={Search} alt="Search Icon" className="w-4 h-4" />
              <input
                type="text"
                placeholder="Search Categories"
                className="flex-1 ml-2 focus:outline-none focus:border-transparent hidden lg:block"
              />
            </div>

            {/* bars */}
            <div className="relative xs2:block hidden">
              <div className="flex justify-center">
                <span className="p-1 text-black opacity-[0.6] hidden 3xl:block mr-2">
                  Sort by
                </span>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex items-center px-7 py-2 text-sm font-thin text-black bg-white rounded-lg"
                >
                  Name
                  <svg
                    className={`w-4 h-4 ml-2 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 8.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute z-10 mt-2 space-y-2 bg-white rounded-md shadow-lg">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 3
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={toggleDropdown}
                className="flex items-center px-7 py-2 text-sm font-thin text-[#3153CD] bg-white rounded-lg"
              >
                <span style={{ marginRight: '0.5rem' }}>Import</span>
                <img src={Vector} alt="" style={{ marginLeft: 'auto' }} />
              </button>
            </div>
          </div>
        </div>
        {/* end */}

        {/* table */}
        <div className="w-full bg-white h-5/6 p-3 rounded-lg ">
          <div className="w-full overflow-x-auto overflow-y-auto">
            <table className="w-full">
              <thead className="font-medium text-md">
                <tr>
                  <th className="py-3 text-left text-gray-500 "> </th>
                  <th className="px-3 py-3 text-left    text-gray-500   ">
                    Sl No
                  </th>
                  <th className="px-12 py-3 text-left    text-gray-500   ">
                    Assembly Name
                  </th>
                  <th className="px-14 py-3 text-left    text-gray-500   ">
                    Length
                  </th>
                  <th className="px-6 py-3 text-left    text-gray-500   ">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left    text-gray-500   ">
                    {''}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="py-1 whitespace-nowrap">
                      <img src={Arrow} alt="" />
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">{index + 1}</td>
                    <td className="px-12 py-3 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="px-14 py-3 whitespace-nowrap text-[#3153CD]">
                      {item.length}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#3153CD]">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={Delete} alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  )
}

export default RightBottom
