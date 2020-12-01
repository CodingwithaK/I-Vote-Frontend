import React from "react"

class ClimateQuestion extends React.Component {
    state = {
      importance: 0,
      reform: 0

    }
  
    handleImportanceChange = (event) => {
      this.setState({importance: event.target.value})
    }
    handleReformChange = (event) => {
        this.setState({reform: event.target.value})
    }
    handleSubmit = () => {
      
    }
    render() {
      let {importance} = this.state.importance
      let {reform} = this.state.reform
      return(
      <div>
      <form className="Climate Change" >
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
        <div></div>
        <button type="submit">submit</button>
      </form>
      </div>
      )
    }
  }
  export default ClimateQuestion 