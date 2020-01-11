import React from 'react'

const CreditCard = (props) => {
  return(
    <div className="credit-card" style={{background: props.hex}}>
      <div className="card-logo">
        <img src={props.logo} alt=""></img>
      </div>
      <div className="card-number">
        <p style={{color: props.fontColor}}>{props.number}</p>
      </div>
      <div className="card-data">
        <p className="card-info" style={{color: props.fontColor}}>{props.info + " " + props.bank}</p>
        <p className="card-person" style={{color: props.fontColor}}>{props.owner}</p>
      </div>
      </div>
  )
}


export default CreditCard