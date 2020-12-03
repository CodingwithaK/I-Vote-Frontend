import React from 'react'
import CandidateCard from './CandidateCard'
import { Card } from 'semantic-ui-react'

class CandidateContainer extends React.Component {
  render() {
    return (
        <Card.Group itemsPerRow={3}>
     
            {this.props.candidates.map(candidate => 
            <CandidateCard
            candidate={candidate}
            key={candidate.id}/>)}
        </Card.Group>
      
    )
  }
}

export default CandidateContainer