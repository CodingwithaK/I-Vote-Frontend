import React from 'react'
import { Card } from 'semantic-ui-react'
import {CardDiv} from '../AppStyles'
class CandidateCard extends React.Component {

  state={matches: null}
  

  
  render() {
 
    
    
    const{ballot_name,img,id,office_name,website}= this.props.candidate
    const{percentage}=this.props.matches[id-1]
    
    let cardInfo = <a href={website} target="_blank"><img src = {img} alt="oh no!"/></a>
   
    return (
     <CardDiv>
     
        <div>
          <div className="content">
            <div> </div>
            <div className="header">{ballot_name} <div/> {office_name} </div>
          </div>

          <div className="image">
            {cardInfo}
          </div>
          { percentage.toFixed(2)}% match
        </div>
    
      </CardDiv>
      
    )
  }
}
export default CandidateCard