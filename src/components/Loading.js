import React from "react"
import CandidateContainer from './CandidateContainer'

class Loading extends React.Component {
state = {loaded: false}
 componentDidMount(){
   

        setTimeout( () => {
       
            this.setState({ loaded: true})
  
           },5000)
    

 }  

    render(){
        let returnValue 
        if (this.state.loaded === false){
            returnValue = "Loading...."
        }
        else 
            returnValue = <CandidateContainer/>
    
        return(
        <div>
        {returnValue}
        </div> )
}
}
export default Loading