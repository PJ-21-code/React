import React from 'react'

const Card = (props) => {
    console.log(props.user);
  return (
    <div>
        <div className="card">
                <h1> {props.user} </h1>
                <p>{props.detail}</p>
                <img src={props.img} />
                <button>View Profile</button>
              </div>
    </div>
  )
}

export default Card