import React from 'react'

const Rating = props => {
  let stars = null
  
  if(props.rating === "0") {
    stars = "☆☆☆☆☆"
  } else if(props.rating === "1") {
    stars = "★☆☆☆☆"
  } else if(props.rating === "2") {
    stars = "★★☆☆☆"
  } else if(props.rating === "3") {
    stars = "★★★☆☆"
  } else if(props.rating === "4") {
    stars = "★★★★☆"
  } else if(props.rating === "5") {
    stars = "★★★★★"
  }
  
  return(
    <div className="rating">
      <p className="stars">{stars}</p>
    </div>
  )
}


export default Rating