import React from 'react';
import { fetchCandidates } from './actions/candidateActions'
import { useDispatch, useSelector } from 'react-redux'
import { zipcodeSubmitAction } from './actions/zipcodeSubmitAction'
 import ClimateQuestion from './components/ClimateQuestion'
const App = (props) =>  {
 
    

  return (
    <div className="App">
    
       
      <ClimateQuestion/>
    </div>
  );
}


export default App

