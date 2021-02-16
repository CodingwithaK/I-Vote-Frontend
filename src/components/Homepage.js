import React from 'react'
import { Container } from 'semantic-ui-react'
import Login from './Login'
import SideBar from './SideBar'
import ClimateQuestion from './ClimateQuestion'

class Homepage extends React.Component {

    
    

      render() {

        return (
          <Container >
            <SideBar/>
          <div>
            {/* <Login/> */}
            <ClimateQuestion/>
          </div>
            <br />
            
            
           
           
            
            
            
          </Container>
        )
      }

}
export default Homepage