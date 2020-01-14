import React, { Component } from 'react'

class ClickablePicture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      glassesOn: false
    } 
  }

  handleClick = () => {
    if (this.state.glassesOn === false) {
      this.setState({ glassesOn: true })
    } else {
      this.setState({ glassesOn: false })
    }
  }

  render() {
    return(
      <div className="image">
        { this.state.glassesOn === false && <img src="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.com/img/persons/maxence.png" alt="" onClick={this.handleClick}></img> }
        { this.state.glassesOn === true && <img src="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.com/img/persons/maxence-glasses.png" alt="" onClick={this.handleClick}></img> }
      </div>
    )
  }
}

export default ClickablePicture
