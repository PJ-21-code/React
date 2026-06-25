import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full p-6 flex flex-nowrap gap-10 w-2/3'>
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
        })}  
    </div>
  )
}

export default RightContent