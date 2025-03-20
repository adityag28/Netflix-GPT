import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-12 absolute text-white w-full aspect-video bg-gradient-to-r from-black '>
            <h1 className='font-bold text-4xl'>{title}</h1>
            <p className='py-6 text-lg w-1/3'>{overview}</p>
            <div>
                <button
                    className='bg-gray-400 text-white p-3 px-10 font-bold text-xl rounded-lg  cursor-pointer hover:opacity-80'>
                    Play
                </button>
                <button
                    className='bg-white text-gray-400 mx-2 p-3 px-10 font-bold text-xl rounded-lg cursor-pointer hover:opacity-80'>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle
