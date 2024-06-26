import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <>
        <div className="box">
            <img src={props.img} alt="" />
            <div className="title">{props.title}</div>
            <div className="para">This is paragraph</div>
        </div>
    </>
  )
}

export default Card
