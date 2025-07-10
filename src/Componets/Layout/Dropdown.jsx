import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = () => {
  return (
    <div className='absolute mt-36 mr-64 border border-solid border-gray-600 w-fit h-fit p-3 text-white '>
      <Link to={'/filt/spicy'}><p>Spicy</p></Link>
      <Link to={'/filt/Tasty'}><p>Tasty</p></Link>
      <Link to={'/filt/Delicious'}><p>Delicious</p></Link>
      <Link to={'/filt/crispy'}><p>Crispy</p></Link>

    </div>
  )
}

export default Dropdown
