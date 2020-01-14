import React from 'react'

const Greetings = props => {
  return(
    <div className="greetings-box">
      <p>{props.text}</p>
    </div>
  )
}

export default Greetings;