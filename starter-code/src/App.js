import React, { Component } from 'react';
import IdCard from './components/IdCard'
import Greetings from './components/greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'

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

        <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height="1.72"
          birth="11/05/1988"
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>Greetings</h1>
        <Greetings
          text='Hallo Ludwig'
        />

        <Greetings
          text='Bonjour François'
        />

        <Random 
          min="1"
          max="6"
        />

        <Random 
          min="1"
          max="100"
        />

        <h1>BoxColor</h1>

        <BoxColor 
          r="255"
          g="0"
          b="0"
        />
        
        <BoxColor 
          r="128"
          g="255"
          b="0"
        />
      </div>
    );
  }
}

export default App;
