import { useState } from 'react'

const RightTop = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const [change, setChange] = useState(true)
  return (
    <>
      <div className="w-full h-full flex-row p-4">
        <div className="p-2 w-full h-2/6">
          <div className="w-full h-full flex ">
            <div className="w-1/2 h-full  items-center hidden lg:flex">
              <h1 className="font-bold text-2xl hidden lg:block">Job</h1>
            </div>
            {/* Top menu */}
            <div className="flex h-full w-full items-center gap-3 justify-center lg:w-1/2  lg:justify-end xs:w-full">
              <h1 className="font-light">Quote Status</h1>
              <div className="relative xs2:block hidden">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex items-center justify-between px-7 py-2 text-sm font-medium text-white bg-[#038A00] rounded-full"
                >
                  Dropdown
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
            {/* end */}

            {/* details */}
          </div>
        </div>
        <div
          className="bg-white w-full h-4/6 flex overflow-x-auto overflow-y-auto rounded-lg"
          style={{
            fontFamily: 'Poppins,sans-serif',
            fontStyle: 'normal',
          }}
        >
          <div className="w-1/2 p-2">
            <div className="w-full h-full flex ">
              <div className="w-full justify-center h-full  4xl:justify-start p-5 items-center 4xl:flex 4xl:w-1/3 hidden">
                <ul className="flex flex-col justify-between h-full text-gray-400 font-bold">
                  <li className="flex-grow">Job Name</li>
                  <li className="flex-grow">Job Number</li>
                  <li className="flex-grow">Unit</li>
                  <li className="flex-grow">Difficulty Level</li>
                </ul>
              </div>

              <div className="w-2/3 h-full  flex justify-start sm:p-5 items-center ">
                <form className="flex flex-col justify-between h-full font-bold">
                  <input
                    type="text"
                    className="border-none outline-none flex-grow placeholder-gray-700"
                    placeholder="Test Project 1"
                  />

                  <input
                    type="text"
                    className="border-none outline-none flex-grow placeholder-gray-700 "
                    placeholder="#ABV3265413"
                  />

                  <div className="flex-grow">
                    <label className="relative inline-flex cursor-pointer items-center justify-center rounded-full border p-1 shadow-inner">
                      <input
                        type="checkbox"
                        className="sr-only"
                        onChange={() => {
                          setChange(!change)
                        }}
                      />
                      <span
                        className={
                          change
                            ? ' flex items-center rounded-full px-3 text-sm font-medium'
                            : 'flex items-center rounded-full px-3 text-sm font-medium bg-[#3153CD]'
                        }
                      >
                        Metric
                      </span>
                      <span
                        className={
                          change
                            ? 'bg-[#3153CD] dark text-body-color flex items-center  rounded-full px-3 text-sm font-medium'
                            : 'dark text-body-color flex items-center  rounded-full px-3 text-sm font-medium'
                        }
                      >
                        Us
                      </span>
                    </label>
                  </div>

                  <div className="flex-grow">
                    <div className="relative inline-block w-1/2  lg:w-full">
                      <select className="border border-gray-300  rounded px-2 py-1 lg:w-full">
                        <option value="">High</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=" w-1/2 grid items-center justify-end p-3 text-white">
            <button className="bg-[#3153CD] w-24 sm:w-32 h-10 rounded-lg">
              Job Details
            </button>
            <button className="bg-[#3153CD] w-24 sm:w-32 h-10 rounded-lg">
              Button 1
            </button>
            <button className="bg-white border-2 text-[#3153CD] w-24 sm:w-32  h-10 rounded-lg">
              Button 2
            </button>
          </div>
        </div>
        {/* end */}
      </div>
    </>
  )
}

export default RightTop
