import React, { Component } from 'react';
import './index.css'
import IdCard from './components/IdCard'
import Greetings from './components/greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard';
import Rating from './components/Rating'

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

      <h1>CreditCard</h1>

        <CreditCard
          hex="#11a998"
          logo="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.com/img/visa.png"
          number="✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ 9935"
          info="03 2021"
          bank="BBVA"
          owner="Roberto Díaz"
          fontColor="#fff"
        />

        <CreditCard
          hex="#edeeed"
          logo="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.com/img/master-card.svg"
          number="✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ 0995"
          info="03 2021"
          bank="N26"
          owner="Maxence Bouret"
          fontColor="#000"
        />

        <CreditCard
          hex="#ddba55"
          logo="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.com/img/master-card.svg"
          number="✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ ✡︎✡︎✡︎✡︎ 6984"
          info="12/19"
          bank="Name of the bank"
          owner="Pedro Sánchez"
          fontColor="#fff"
        />  

        <h1>Rating</h1>
        <Rating rating="0" />
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
      </div>
    );
  }
}

export default App;
