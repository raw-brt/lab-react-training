import React from 'react'

const DriverCard = props => {
  return(
    <div className="driver-card">
      <div className="driver-img">
        <img src={props.img} alt=""></img>
      </div>
      <div className="driver-info">
        <h2 className="driver-name">{props.name}</h2>
        { props.rating === "0" && <h3 className="driver-rating">"☆☆☆☆☆"</h3> }
        { props.rating === "1" && <h3 className="driver-rating">"★☆☆☆☆"</h3> }
        { props.rating === "2" && <h3 className="driver-rating">"★★☆☆☆"</h3> }
        { props.rating === "3" && <h3 className="driver-rating">"★★★☆☆"</h3> }
        { props.rating === "4" && <h3 className="driver-rating">"★★★★☆"</h3> }
        { props.rating === "5" && <h3 className="driver-rating">"★★★★★"</h3> }
        <p className="driver-car">{props.car}</p>
      </div>
    </div>
  )
}


export default DriverCard