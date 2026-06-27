import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params= useParams()
    console.log(params);
  return (
    <div>
        <div></div>
        <h1 className='whitespace-nowrap'>{params.id} Detail of the course</h1>
    </div>
  )
}

export default CourseDetail