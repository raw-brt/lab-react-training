import React, { Component } from 'react'

class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likeCount: 0
    }
  }

  handleClick = () => {
    this.setState({
      likeCount: this.state.likeCount + 1
    })
  }

  render() {
    return(
      <div className="like-button">
        <button onClick={this.handleClick}>{this.state.likeCount} Likes</button>
      </div>
    )
  }
}

export default LikeButton