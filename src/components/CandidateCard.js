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
    const{name,image}= this.props.candidate
    const{percentage}= this.props.candidatePercentage
    if (this.state.isFront == true)
        cardInfo = <img src = {image}/>
    else 
        cardInfo =  <p> 
                        {percentage} match 
                    </p>
    return (
      <Card onClick={this.handleOnClick}>
        <div>
          <div className="image">
            {cardInfo}
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          
        </div>
      </Card>
    )
  }




}
export default CandidateCard