/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import Vec1 from '../../public/mid/vec1.png'
import Search from '../../public/mid/search.png'

import { useState } from 'react'
import LeftTable from './LeftTable'

const MidLeft = () => {
  const sourceData = {
    Products: [
      { id: 'Company', type: 'C', name: 'Fixture' },
      { id: 'Company', type: 'C', name: 'Switches' },
      { id: 'Company', type: 'C', name: 'Receptacles' },
      { id: 'Company', type: 'C', name: 'Computer & Phone' },
      { id: 'Company', type: 'C', name: 'Fire Alarm' },
      { id: 'Company', type: 'C', name: 'EMT (Branch)' },
      { id: 'Company', type: 'C', name: 'EMT (Feeder)' },
      { id: 'Company', type: 'C', name: 'GRC (Feeder)' },
      { id: 'Company', type: 'C', name: 'GRC (Branch) ' },
      { id: 'Company', type: 'C', name: 'Cable (Branch)' },
      { id: 'Company', type: 'C', name: 'Cable (Feeder)' },
      { id: 'Company', type: 'C', name: 'Services' },
      { id: 'Company', type: 'C', name: 'Panels' },
      { id: 'Company', type: 'C', name: 'Manual Disconnects' },
    ],
    Company: [
      { id: 'Categories', type: 'C', name: 'Recessed Fluorescent' },
      { id: 'Categories', type: 'C', name: 'Surface Fluorescent' },
      { id: 'Categories', type: 'C', name: 'Recessed Incandescent' },
      { id: 'Categories', type: 'C', name: 'Surface Incandescent' },
      { id: 'Categories', type: 'C', name: 'Recessed HO' },
      { id: 'Categories', type: 'C', name: 'Surface HO' },
      { id: 'Categories', type: 'C', name: 'Exit & Emergency' },
      { id: 'Categories', type: 'C', name: ' Fans & Miscellaneous' },
      { id: 'Categories', type: 'C', name: 'Spec Fixtures ( Type A....)' },
      { id: 'Categories', type: 'C', name: 'Fixture Connections' },
    ],
    Categories: [
      { id: 'Products', type: 'A', name: '2x4” Drop-In T-Bar (1/2” Flex)' },
      { id: 'Products', type: 'A', name: '1x4” Drop-In T-Bar (1/2” Flex)' },
      { id: 'Products', type: 'A', name: '2x4” Drop-In T-Bar (14/2” BX)' },
      { id: 'Products', type: 'A', name: '1x4” Drop-In T-Bar (14/2” BX)' },
      { id: 'Products', type: 'C', name: '2x2” Drop-In T-Bar (14/2” BX)' },
      { id: 'Products', type: 'C', name: '2x4” Drop-In T-Bar (12/2” BX)' },
      { id: 'Products', type: 'C', name: '1x4” Drop-In T-Bar (12/2” BX)' },
      { id: 'Products', type: 'C', name: '2x4” Drop-In T-Bar (12/2” BX)' },
      { id: 'Products', type: 'C', name: '1x4” Drop-In T-Bar (14/2” Teck)' },
      { id: 'Products', type: 'C', name: '1x4” Drop-In T-Bar (12/2” Teck)' },
    ],
  }

  const [arr, setArr] = useState(sourceData.Products)

  function MYcallback(data) {
    console.log(data)
    setArr(getArrayByKey(data))
  }

  const getArrayByKey = (data = 'Product') => {
    if (sourceData.hasOwnProperty(data)) {
      return sourceData[data]
    }
    return []
  }

  return (
    <div className="w-full p-6 border-r-2">
      <div className="w-full h-20 flex mt-4 p-5">
        <div
          className="w-1/2 flex gap-2 items-center"
          style={{
            fontFamily: 'Poppins,sans-serif',
            fontStyle: 'normal',
          }}
        >
          <img src={Vec1} alt="" className="w-6 h-6 hidden sm:block" />
          <h1 className="font-bold text-xl hidden lg:block">Categories</h1>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="flex justify-end">
            <div className="relative border rounded-xl shadow-md px-8 py-2 bg-white   items-center hidden xs2:flex">
              <img src={Search} alt="Search Icon" className="w-4 h-4" />
              <input
                type="text"
                placeholder="Search Categories"
                className="flex-1 ml-2 focus:outline-none focus:border-transparent hidden 3xl:block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-5 w-full">
        <div className="overflow-x-scroll table-container">
          <LeftTable arr={arr} callback={MYcallback} />
        </div>
      </div>
    </div>
  )
}

export default MidLeft
