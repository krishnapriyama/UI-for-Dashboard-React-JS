import { useState } from 'react'
import Edit from '/mid/edit.png'
import img from '../../public/mid/1.png'

export default function Modal() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button className="" type="button" onClick={() => setShowModal(true)}>
        <img src={img} alt="" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto  mx-auto max-w-auto">
              {/*content*/}
              <div className=" rounded-lg  relative flex flex-col items-center w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex w-full mt-7">
                  <div className="flex justify-center w-full">
                    <h3 className="text-xl font-semibold text-black p-5">
                      Add Assembly to the Project
                    </h3>
                  </div>
                </div>
                {/*body*/}
                <div className="relative flex">
                  <div className="w-[48rem] h-[18rem] flex-col p-8">
                    <div className="h-1/2 w-full flex-col">
                      <div className="">
                        <div className="w-full flex gap-6 items-center h-full">
                          <div className="w-1/3">
                            <h2>Assembly Name</h2>
                          </div>
                          <div className="w-2/3">
                            <input
                              type="text"
                              className="border-none outline-none font-bold w-full placeholder-black"
                              placeholder="2x4” Drop-In T-Bar (1/2” Flex)"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex gap-6">
                        <div className="w-1/2 mt-8">
                          <div className="w-full flex gap-6 items-center h-full">
                            <div className="">
                              <h2 className="text-xl font-base">Count</h2>
                            </div>
                            <div className="w-2/3">
                              <input
                                type="text"
                                className="border rounded-lg outline-none  w-full p-2"
                                placeholder="1250"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-1/2 mt-8">
                          <div className="w-full flex gap-6 items-center h-full">
                            <div className="">
                              <h2 className="text-xl font-base">Length</h2>
                            </div>
                            <div className="w-2/3">
                              <input
                                type="text"
                                className="border rounded-lg outline-none w-full p-2"
                                placeholder="1250"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <h1 className="text-gray-700">Assembly Description</h1>
                      <div>
                        <div className="w-auto mt-5">
                          <table className="w-full bg-[#F2F6F9] rounded-lg">
                            <thead>
                              <tr>
                                <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Sl No
                                </th>
                                <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Description
                                </th>
                                <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Quantity
                                </th>
                                <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Fct 1
                                </th>
                                <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Fct 2
                                </th>
                                <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Catalog Number
                                </th>
                                <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  {' '}
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr>
                                <td className="px-3 py-3 text-center whitespace-nowrap">
                                  1
                                </td>
                                <td className="px-3 py-3 text-center whitespace-nowrap">
                                  4x1 1/2” SQ Box 1/2” KO
                                </td>
                                <td className="px-3 py-3 text-center whitespace-nowrap">
                                  2
                                </td>
                                <td className="px-3 py-3 text-center whitespace-nowrap">
                                  2
                                </td>
                                <td className="px-3 py-3 text-center whitespace-nowrap">
                                  2
                                </td>

                                <td className="px-3 py-3 text-center whitespace-nowrap ">
                                  32321AA15
                                </td>
                                <td className="px-0 py-0 text-center whitespace-nowrap ">
                                  <img src={Edit} alt="" className="w-4 h-4" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-solid border-slate-200 gap-6">
                  <button
                    className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border rounded-lg"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-blue-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border rounded-lg"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
