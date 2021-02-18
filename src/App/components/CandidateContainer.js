import React from 'react'
import CandidateCard from './CandidateCard'
import Loading from './Loading'
import { Card } from 'semantic-ui-react'
const URL = "http://localhost:3000/api/candidates"
class CandidateContainer extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div>       
      <Card.Group itemsPerRow={3}>   
      {this.props.candidates.map(candidate =>     
        <CandidateCard
        matches={this.props.matches}
        candidate={candidate}
        key={candidate.id}/>)}
        
      </Card.Group>
      </div>
    )
  }
}

export default CandidateContainer