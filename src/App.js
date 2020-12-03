import React from 'react';
import { fetchCandidates } from './actions/candidateActions'
import { useDispatch, useSelector } from 'react-redux'
import { zipcodeSubmitAction } from './actions/zipcodeSubmitAction'
 import ClimateQuestion from './components/ClimateQuestion'
 import { Container } from 'semantic-ui-react'
 import Homepage from './components/Homepage'
const App = (props) =>  {
 
    

  return (
    <div className="App">
    
    <Container>
      <Homepage/>

    </Container>
    </div>
  );
}


export default App

