import React from 'react'

const Btn = ({ onClick, title }) => {
  return (
    <button className="success-btn" onClick={onClick}>
      {title}
    </button>
  )
}

export default Btn
