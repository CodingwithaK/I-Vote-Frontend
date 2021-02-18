import React from "react"
import CandidateContainer from './CandidateContainer'
import Spinner from './Spinner'
import {LoadingDiv} from '../AppStyles'
const URL = "http://localhost:3000/api/users/"
class Loading extends React.Component {
state = 
{candidates: null,
matches:null}

 componentDidMount(){
    fetch( "http://localhost:3000/api/candidates")
    .then(res=> res.json())
    .then((candidates)=> this.setState({candidates: candidates}))

    setTimeout( () => {
       
        fetch(URL+`${localStorage.getItem("id")}`)
        .then(res=>res.json())
       .then ((matches)=> this.setState({matches: matches.candidate_users}))
       

       },10000)
   
       
    

 }  

    render(){
       
        return(
        <div>
        {this.state.matches?console.log("no candidates") : console.log(this.state.matches)}
        {this.state.matches? <CandidateContainer matches={this.state.matches} candidates={this.state.candidates}/> : <LoadingDiv><h1>Loading</h1> <Spinner/></LoadingDiv>}
        </div> )
}
}
export default Loading