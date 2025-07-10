import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemById = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const fetchData = async () => {
    try {
      const resp = await axios.get(`http://localhost:3000/dishes`)
      
      let dish = resp.data.find((data) => data.id == id)
      setData(dish)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if(id){
      fetchData()
    }
    
  }, [id])
  console.log(data);
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className='flex p-3 w-3/4 h-4/6 '>
        <div className='h-full w-1/3 '> <img
          src={data.image}
          alt="Product"
          className="w-full h-60 object-cover"
        /></div>
        <div className='h-full w-2/3 ml-2.5'>
        <h1 className='font-bold text-2xl'>Why Choose Us</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <button className='text-rose-500 border border-solid rounded-2xl p-1.5'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default ItemById
