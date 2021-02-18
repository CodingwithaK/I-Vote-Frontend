import React from "react"
import CandidateContainer from './CandidateContainer'
import Spinner from './Spinner'
import {LoadingDiv} from '../AppStyles'
const URL = "http://localhost:3000/api/users"
class Loading extends React.Component {
state = 
{candidateUser: []}

 componentDidMount(){


    setTimeout( () => {
       
        fetch(URL)
        .then(res=>res.json())
       .then ((matches)=> this.setState({candidateUser: matches[0].candidate_users}))
       

       },10000)
   
       
    

 }  

    render(){
       
        return(
        <div>
        {this.state.candidateUser.length>=7? <CandidateContainer/> : <LoadingDiv><h1>Loading</h1> <Spinner/></LoadingDiv>}
        </div> )
}
}
export default Loading