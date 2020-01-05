import React, { Component } from 'react';
import IdCard from './components/IdCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard 
        image="https://pbs.twimg.com/profile_images/1155119357699248129/Hj7GwSya_400x400.jpg"
        firstName="Roberto"
        lastName="Diaz"
        gender="Male"
        height="1.81"
        birth="07/05/1988"
        />

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
