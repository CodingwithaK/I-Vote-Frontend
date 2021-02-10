import React from 'react'
import { Card } from 'semantic-ui-react'
class CandidateCard extends React.Component {

  state={isFront:true}
  

  handleOnClick= () => {
    
    this.setState({
      isFront:!this.state.isFront
    })
  }
  render() {
    const{ballot_name,img}= this.props.candidate
   
    const{percentage}= this.props.candidate.candidate_users[0]
    
    let cardInfo
    if (this.state.isFront === true)
        cardInfo = <img src = {img} alt="oh no!"/>
    else 
        cardInfo =  <p> 
                        {percentage}% match 
                    </p>
    return (
      <Card onClick={this.handleOnClick}>
        <div>
          <div className="content">
            <div className="header">{ballot_name}</div>
          </div>
          <div className="image">
            {cardInfo}
          </div>
          
        </div>
      </Card>
    )
  }




}
export default CandidateCard