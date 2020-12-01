import React from "react"
const url = "http://localhost:3000/api/"
class ClimateQuestion extends React.Component {
    state = {
      importance: 0,
      stance_id: 0,
      issue_id:6,
    }
 

    handleImportanceChange = (event) => {
      this.setState({importance: event.target.value})
    }
    handleReformChange = (event) => {
        this.setState({stance_id: event.target.value})
    }
    handleFormSubmit = (event) => {
      event.preventDefault()
      
      fetch(url+"stances", {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          issue_id: parseInt(this.state.issue_id),
          stance_id: parseInt(this.state.stance_id),
          importance: parseInt(this.state.importance),
          user_id: 1
        })
      })
      
    }

    render() {
      
      return(
      <div>
      <form className="Climate Change"  onSubmit={this.handleFormSubmit} >
       <p>
         What kind of reform would you like to see on climate change?
       </p>
       
       <div onChange={event => this.handleReformChange(event)}>
        <input type="radio" value="0" name="Climate Change" issue_id="1" /> Conservative Reform
        <input type="radio" value="1" name="Climate Change" issue_id="1" /> Neutral Reform
        <input type="radio" value="2"name="Climate Change" issue_id="1" /> Progressive Reform
        </div>
        <p>How important is it to you, for your ideal candidate to share the same view as you?</p>
        <div onChange={event => this.handleImportanceChange(event)}>
        <input type="radio" value="0" name="Climate Importance" issue_id="1" /> Not Important 
        <input type="radio" value="1" name="Climate Importance" issue_id="1" /> A Little Important
        <input type="radio" value="2" name="Climate Importance" issue_id="1" /> Somewhat Important 
        <input type="radio" value="3" name="Climate Importance" issue_id="1" /> Very Important
        <input type="radio" value="4" name="Climate Importance" issue_id="1" /> Mandatory 
        </div>
        <button type="submit">submit</button>
      </form>
      </div>
      )
    }
  }
  export default ClimateQuestion 