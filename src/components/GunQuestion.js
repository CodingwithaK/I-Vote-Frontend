

import React from "react"
const url = "http://localhost:3000/api/"
class GunQuestion extends React.Component {
    state = {
      importance: 0,
      stance_id: 0,
      issue_id:7,
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
      <form className="Gun"  onSubmit={this.handleFormSubmit} >
       <p>
     Should there be more restrictions on the current process of purchasing a gun?
       </p>
       
       <div onChange={event => this.handleReformChange(event)}>
        <input type="radio" value="0" name="Gun" issue_id="7" /> No
        <input type="radio" value="1" name="Gun" issue_id="7" />  Other stance 
        <input type="radio" value="2"name="Gun" issue_id="7" /> Yes
        </div>
        <p>How important is it to you, for your ideal candidate to share the same view as you?</p>
        <div onChange={event => this.handleImportanceChange(event)}>
        <input type="radio" value="0" name="Gun Importance" issue_id="7" /> Not Important 
        <input type="radio" value="1" name="Gun Importance" issue_id="7" /> A Little Important
        <input type="radio" value="2" name="Gun Importance" issue_id="7" /> Somewhat Important 
        <input type="radio" value="3" name="Gun Importance" issue_id="7" /> Very Important
        <input type="radio" value="4" name="Gun Importance" issue_id="7" /> Mandatory 
        </div>
        <button type="submit">submit</button>
      </form>
      </div>
      )
    }
  }
  export default GunQuestion