import React from 'react'

const GolfItem = ({course}) => {
    const {location, name}=course
  return (
    <div>

    <p>{location}</p>
    <p>{name}</p>
    </div>
  )
}

export default GolfItem