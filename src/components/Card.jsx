import React from 'react'

const Card = ({children, bg}) => {
  return (
    <div className = {`${bg} gray-100 p-6 rounded-lg schadow-md ` }>
    {children}
    </div>
  )
}

export default Card 