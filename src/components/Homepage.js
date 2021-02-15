import React from 'react'
import { Container } from 'semantic-ui-react'

import Login from './Login'


class Homepage extends React.Component {

    
    

      render() {

        return (
          <Container >
            <h1>I-Vote Candidate Matcher</h1>
          <div>
            <Login/>
          </div>
            <br />
            
            
           
           
            
            
            
          </Container>
        )
      }

}
export default Homepage