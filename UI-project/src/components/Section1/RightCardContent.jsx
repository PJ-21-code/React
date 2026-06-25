import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
       <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className="bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center">{props.id}</h2>
            <div >
                <p className='text-shadow-2xs text-15px leading-relaxed text-white mb-14'>{props.intro}</p>
            <div className='flex justify-between'>    
                <button className='bg-blue-400 text-white font-medium px-6 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-400 text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>    
            </div>
        </div> 
    </div>
  )
}

export default RightCardContent