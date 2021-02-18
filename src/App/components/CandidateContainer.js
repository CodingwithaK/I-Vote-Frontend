import React from 'react'
import CandidateCard from './CandidateCard'
import {CardDivs} from '../AppStyles'
import { Card } from 'semantic-ui-react'
const URL = "http://localhost:3000/api/candidates"
class CandidateContainer extends React.Component {
  
  render() {
    
    return (
     
        <CardDivs>
      {this.props.candidates.map(candidate =>     
        <CandidateCard
        matches={this.props.matches}
        candidate={candidate}
        key={candidate.id}/>)}

      </CardDivs>
     
    )
  }
}

export default CandidateContainer