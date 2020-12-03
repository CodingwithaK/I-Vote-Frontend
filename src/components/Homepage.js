import React from 'react'
import { Container } from 'semantic-ui-react'
import CandidateContainer from './CandidateContainer'
import ClimateQuestion from './ClimateQuestion'
import AbortionQuestion from './AbortionQuestion'
import HealthcareQuestion from './HealthcareQuestion'
import GunQuestion from './GunQuestion'
import ReligionQuestion from './ReligionQuestion'
import ImmigrationQuestion from './ImmigrationQuestion'
import EducationQuestion from './EducationQuestion'
import AbortionQuestion from './AbortionQuestion'
import ClimateQuestion from './ClimateQuestion'
const URL = "http://localhost:3000/api/candidate"

class Homepage extends React.Component {

    state = {
        candidates:[],

    }
    componentDidMount(){
        fetch(URL)
          .then(res=>res.json())
          .then(candidates => this.setState({
            
            candidates:candidates
          }))
      }

      render() {

        return (
          <Container>
            <h1>I-Vote Candidate Matcher</h1>
            <br />
            <ClimateQuestion/>
            <HealthcareQuestion/>
            <AbortionQuestion/>
            <EducationQuestion/>
            <ImmigrationQuestion/>
           <ReligionQuestion/>
           <GunQuestion candidates={this.state.candidates}/>
          </Container>
        )
      }

}
export default Homepage