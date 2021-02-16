import React from "react"
import ReligionQuestion from './ReligionQuestion'
const url = "http://localhost:3000/api/"
class ImmigrationQuestion extends React.Component {
    state = {
      importance: 0,
      stance_id: 0,
      issue_id:5,
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
      this.setState({submitted:true})
    }

    render() {
      let returnValue
      if(this.state.submitted === false)
      returnValue =  <form className="Immigration"  onSubmit={this.handleFormSubmit} >
      <p>
      Should the U.S. build a wall along the southern border?
      </p>
      
      <div onChange={event => this.handleReformChange(event)}>
       <input type="radio" value="0" name="Immigration" issue_id="5" /> Yes
       <input type="radio" value="2"name="Immigration" issue_id="5" /> No
       <input type="radio" value="1" name="Immigration" issue_id="5" />  Other stance 
       </div>
       <p>How important is it to you, for your ideal candidate to share the same view as you?</p>
       <div onChange={event => this.handleImportanceChange(event)}>
       <input type="radio" value="0" name="Immigration Importance" issue_id="5" /> Not Important 
       <input type="radio" value="1" name="Immigration Importance" issue_id="5" /> A Little Important
       <input type="radio" value="2" name="Immigration Importance" issue_id="5" /> Somewhat Important 
       <input type="radio" value="3" name="Immigration Importance" issue_id="5" /> Very Important
       <input type="radio" value="4" name="Immigration Importance" issue_id="5" /> Mandatory 
       </div>
       <button type="submit">submit</button>
     </form>
     
      else
      returnValue = <ReligionQuestion/>
      return(
      <div>
     {returnValue}
      </div>
      )
    }
  }
  export default ImmigrationQuestion