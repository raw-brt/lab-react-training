import React from 'react'

const BoxColor = props => {
  const rgbString = 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')'
  const toHex = color => {
    let hex = color.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  const rgbToHex = (r, g, b) => {
    return '#' + toHex(r) + toHex(g) + toHex(b)
  }

  const hex = rgbToHex(props.r, props.g, props.b)

  const divStyle = {
    background: rgbString
  }

  return (
    <div className="box-color" style={divStyle}>
      <p>{rgbString}</p>
      <p>{hex}</p>
    </div>
  )
}

export default BoxColor