import React from "react"
import CandidateContainer from './CandidateContainer'
const URL = "http://localhost:3000/api/users"
class Loading extends React.Component {
state = 
{candidateUser: []}

 componentDidMount(){


    setTimeout( () => {
       
        fetch(URL)
        .then(res=>res.json())
       .then ((matches)=> this.setState({candidateUser: matches[0].candidate_users}))
       

       },6000)
   
    
    

 }  

    render(){
       
        return(
        <div>
        {this.state.candidateUser.length>=7? <CandidateContainer/> : "Loading..." }
        </div> )
}
}
export default Loading