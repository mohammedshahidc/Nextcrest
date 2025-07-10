import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dishes = () => {
    const [dishes, setDishes] = useState([])

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/dishes')
        setDishes(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="min-h-screen w-screen bg-gray-100 p-4">
            <p className='text-3xl tex-black ml-[520px] '>Our Dishes</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 ">
                {dishes.map((item, index) => (
                   <Link to={`/${item.id}`}> <div
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all "
                        key={index}
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt="Product"
                                className="w-full h-52 object-cover"
                            />
                           
                        </div>
                        <div className="p-5 space-y-4 w-full h-fit ">
                            <p>{item.title}</p>
                            <div className="flex items-center gap-1 text-yellow-400">
                                {"★".repeat(item.rating)}
                                {"☆".repeat(5 - item.rating)}
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-500 line-through">{item.price}</p>
                            </div>
                            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
            
        </div>
    )
}

export default Dishes
