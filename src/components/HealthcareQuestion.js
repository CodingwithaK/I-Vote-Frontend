import React from "react"
const url = "http://localhost:3000/api/"
class HealthcareQuestion extends React.Component {
    state = {
      importance: 0,
      stance_id: 0,
      issue_id:2,
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
      <form className="Healthcare"  onSubmit={this.handleFormSubmit} >
       <p>
       Should the federal government increase funding of health care for low income individuals ?
       </p>
       
       <div onChange={event => this.handleReformChange(event)}>
        <input type="radio" value="0" name="Healthcare" issue_id="2" /> No
        <input type="radio" value="1" name="Healthcare" issue_id="2" /> Other Stance
        <input type="radio" value="2"name="Healthcare" issue_id="2" /> Yes
        </div>
        <p>How important is it to you, for your ideal candidate to share the same view as you?</p>
        <div onChange={event => this.handleImportanceChange(event)}>
        <input type="radio" value="0" name="Healthcare Importance" issue_id="2" /> Not Important 
        <input type="radio" value="1" name="Healthcare Importance" issue_id="2" /> A Little Important
        <input type="radio" value="2" name="Healthcare Importance" issue_id="2" /> Somewhat Important 
        <input type="radio" value="3" name="Healthcare Importance" issue_id="2" /> Very Important
        <input type="radio" value="4" name="Healthcare Importance" issue_id="2" /> Mandatory 
        </div>
        <button type="submit">submit</button>
      </form>
      </div>
      )
    }
  }
  export default HealthcareQuestion