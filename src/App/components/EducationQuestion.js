import React from "react"
import ImmigrationQuestion from './ImmigrationQuestion'
import {FormDiv} from '../AppStyles'
const url = "http://localhost:3000/api/"
class EducationQuestion extends React.Component {
    state = {
      importance: 0,
      stance_id: 0,
      issue_id:4,
      submitted: false
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
          user_id: localStorage.id
        })
      })
      this.setState({submitted: true})
    }

    render() {
      let returnValue
      if(this.state.submitted === false)
      returnValue = 
      <FormDiv>
        <h2>Question 4</h2>
      <form className="Education"  onSubmit={this.handleFormSubmit} >
        <p>
        Should the federal government pay for tuition at colleges and universities?
        </p>
        
        <div onChange={event => this.handleReformChange(event)}>
          <input type="radio" value="2"name="Education" issue_id="4" /> Yes
          <input type="radio" value="0" name="Education" issue_id="4" /> No
          <input type="radio" value="1" name="Education" issue_id="4" />  Other stance 
        </div>
        <p>
          How important is it to you, for your ideal candidate to share the same view as you?
        </p>
        <div onChange={event => this.handleImportanceChange(event)}>
          <input type="radio" value="0" name="Education Importance" issue_id="4" /> Not Important 
          <input type="radio" value="1" name="Education Importance" issue_id="4" /> A Little Important
          <input type="radio" value="2" name="Education Importance" issue_id="4" /> Somewhat Important 
          <input type="radio" value="3" name="Education Importance" issue_id="4" /> Very Important
          <input type="radio" value="4" name="Education Importance" issue_id="4" /> Mandatory 
        </div>
        <button type="submit">
          submit
        </button>
      </form>
      </FormDiv>
      else
      returnValue = <ImmigrationQuestion/>
      return(
      <div>
        {returnValue}
      </div>)
    }
  }
  export default EducationQuestion