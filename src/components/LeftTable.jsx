/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react'
import Modal from './model'

import vec from '/mid/Vector.png'

const LeftTable = (props) => {
  const handleChange = (id) => {
    let check = document.getElementById(id).value
    return check
  }

  const [arr, setArray] = useState([])
  useEffect(() => {
    setArray(props.arr)
  }, [props.arr])

  return (
    <table
      className="w-full h-screen"
      style={{
        fontFamily: 'Poppins, sans-serif',
        fontStyle: 'normal',
      }}
    >
      <thead className="text-black opacity-40">
        <tr>
          <th scope="col" className="px-2 py-2 text-left font-medium">
            Sl No
          </th>
          <th scope="col" className="px-6 py-2 text-left font-medium">
            Name
          </th>
          <th scope="col" className="px-6 py-2 text-left font-medium">
            Type
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {arr.map((item, index) => (
          <tr key={index}>
            <td className="px-2 py-2 whitespace-nowrap">{index + 1}</td>
            <td
              className="px-6 py-2 whitespace-nowrap hover:cursor-pointer"
              onClick={() => {
                props.callback(handleChange(index + item.name))
              }}
            >
              {' '}
              <input type="hidden" value={item.id} id={index + item.name} />
              {item.name}{' '}
            </td>

            <td className="px-6 py-2 whitespace-nowrap hover:cursor-pointer mt-2 flex gap-6">
              C{' '}
              {'Products' !== item.id ? (
                <img src={vec} alt="" className="w-6 h-6" />
              ) : (
                <Modal />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default LeftTable
