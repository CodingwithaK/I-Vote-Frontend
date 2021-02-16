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
    
    const{ballot_name,img,id}= this.props.candidate
    const{percentage}= JSON.parse(localStorage.getItem("matches"))[id - 1]
    let cardInfo
    if (this.state.isFront === true)
        cardInfo = <img src = {img} alt="oh no!"/>
    else 
    
        cardInfo =  
        <p> 
          {percentage.toFixed(2)}% match 
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