import React from 'react';
import { fetchCandidates } from './actions/candidateActions'
import { useDispatch, useSelector } from 'react-redux'
import { zipcodeSubmitAction } from './actions/zipcodeSubmitAction'
 
const App = (props) =>  {
    const dispatch = useDispatch()
    const candidates = useSelector(state => state.candidates)
    const zipcode = useSelector(state => state.zipcode)
    const handleCandidateFetch = (zipcode) => {
            //  dispatch({type:`LOADING_CANDIDATES`})
          fetch(`api.votesmart.org/Candidates.getByZip?key=5905b667c9a60df77360fd5b80d81e03&zip5=${zipcode}`)
          .then(response => console.log(response) 
          // {return response.text()}
          )
          .then(responseTEXT => {
            debugger
            dispatch(fetchCandidates(responseTEXT))
              // dispatch({ type:`ADD_CANDIDATES`, candidates: responseJSON })
          })
    }
    const handleSubmit = (e) => {
      e.preventDefault()
       const input = e.target[0].value
       dispatch(zipcodeSubmitAction(input))
      handleCandidateFetch(zipcode)
    }

    
  return (
    <div className="App">
     <p>
     <form onSubmit={handleSubmit}>
  <label>
    Please enter your zip
    <input type="text" name="zip5" />
  </label>
  <input type="submit" value="Submit" />
</form>
     </p>
     <div>
  {candidates.forEach(candidate => console.log(candidate))}

       </div>
    </div>
  );
}


export default App

