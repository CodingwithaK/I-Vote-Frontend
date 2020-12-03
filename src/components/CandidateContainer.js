import React from 'react'
import CandidateCard from './CandidateCard'
import { Card } from 'semantic-ui-react'
const URL = "http://localhost:3000/api/candidates"
class CandidateContainer extends React.Component {
  state = {candidates:[]}
  componentDidMount(){
    fetch(URL)
      .then(res=>res.json())
      .then(candidates => this.setState({
        
        candidates:candidates
      }))
  }

  render() {
    return (
      <div>
        <Card.Group itemsPerRow={3}>
     
            {this.state.candidates.map(candidate => 
            
            <CandidateCard
            candidate={candidate}
            key={candidate.id}/>)}
        </Card.Group>
        </div>
    )
  }
}

export default CandidateContainer