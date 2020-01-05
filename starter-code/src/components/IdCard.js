import React, { Component } from 'react';

class IdCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profilePic: this.props.image,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      gender: this.props.gender,
      height: this.props.height,
      birth: this.props.birth
    }
  }
  render() {
    return (
      <div className="idCard">
        <div className="profileImg">
          <img src={this.state.profilePic} alt=""></img>
        </div>
        <div className="rightColumn">
          <p><strong>First Name: </strong>{this.state.firstName}</p>
          <p><strong>Last Name: </strong>{this.state.lastName}</p>
          <p><strong>Gender: </strong>{this.state.gender}</p>
          <p><strong>Height: </strong>{this.state.height}</p>
          <p><strong>Birth Date: </strong>{this.state.birth}</p>
        </div>
      </div>
    )
  }
}

export default IdCard;