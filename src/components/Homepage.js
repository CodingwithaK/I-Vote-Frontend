import React from 'react'
import { Container } from 'semantic-ui-react'

import ClimateQuestion from './ClimateQuestion'
import HealthcareQuestion from './HealthcareQuestion'
import GunQuestion from './GunQuestion'
import ReligionQuestion from './ReligionQuestion'
import ImmigrationQuestion from './ImmigrationQuestion'
import EducationQuestion from './EducationQuestion'
import AbortionQuestion from './AbortionQuestion'



class Homepage extends React.Component {

    
    

      render() {

        return (
          <Container >
            <h1>I-Vote Candidate Matcher</h1>
            <br />
            <ClimateQuestion/>
            <HealthcareQuestion/>
            <AbortionQuestion/>
            <EducationQuestion/>
            <ImmigrationQuestion/>
            <ReligionQuestion/>
            <GunQuestion/>
          </Container>
        )
      }

}
export default Homepage