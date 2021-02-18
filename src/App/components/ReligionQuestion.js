
import React from "react"
import GunQuestion from './GunQuestion'
import {FormDiv} from '../AppStyles'
const url = "http://localhost:3000/api/"
class ReligionQuestion extends React.Component {
    state = {
      importance: 0,
      stance_id: 0,
      issue_id:6,
      submitted:false
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
          <h2>Question 6</h2>
        <form className="Religion"  onSubmit={this.handleFormSubmit} >
        <p>
        Should a business be able to deny service to a customer if the request conflicts with the owner’s religion?
        </p>
        
        <div onChange={event => this.handleReformChange(event)}>
         <input type="radio" value="0" name="Religion" issue_id="6" /> Yes
         <input type="radio" value="2"name="Religion" issue_id="6" /> No
         <input type="radio" value="1" name="Religion" issue_id="6" />  Other stance 
         </div>
         <p>How important is it to you, for your ideal candidate to share the same view as you?</p>
         <div onChange={event => this.handleImportanceChange(event)}>
         <input type="radio" value="0" name="Religion Importance" issue_id="6" /> Not Important 
         <input type="radio" value="1" name="Religion Importance" issue_id="6" /> A Little Important
         <input type="radio" value="2" name="Religion Importance" issue_id="6" /> Somewhat Important 
         <input type="radio" value="3" name="Religion Importance" issue_id="6" /> Very Important
         <input type="radio" value="4" name="Religion Importance" issue_id="6" /> Mandatory 
         </div>
         <button type="submit">submit</button>
       </form>
       </FormDiv>
       else
       returnValue = <GunQuestion/>
      return(
      <div>
      {returnValue}
      </div>
      )
    }
  }
  export default ReligionQuestion