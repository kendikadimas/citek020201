import React from 'react'

const Popup = ({ restaurant, imageRestaurant, description, onClose }) => {
    return (
    <div className='w-3/4 h-3/4 justify-center items-center bg-gray-200 rounded-lg p-5 relative'>
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
        <h1 className='font-bold text-3xl text-teal-400 text-center p-4'>{restaurant}</h1>
        <img src={imageRestaurant} alt={restaurant} className="mx-auto w-1/2 h-1/2" />
        <p className='p-4'>{description}</p>
        <div className='flex justify-center'>
            <button className='bg-teal-400 rounded-xl px-5 py-1 font-semibold text-white text-center'>Lihat Lokasi</button>
        </div>
    </div>
    )
}

export default Popup
