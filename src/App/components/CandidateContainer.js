import React from 'react'
import CandidateCard from './CandidateCard'
import {CardDiv} from '../AppStyles'
import { Card } from 'semantic-ui-react'
const URL = "http://localhost:3000/api/candidates"
class CandidateContainer extends React.Component {
  
  render() {
    
    return (
     
        <CardDiv>
      <Card.Group itemsPerRow={2}>   
      {this.props.candidates.map(candidate =>     
        <CandidateCard
        matches={this.props.matches}
        candidate={candidate}
        key={candidate.id}/>)}
        
      </Card.Group>
      </CardDiv>
     
    )
  }
}

export default CandidateContainer