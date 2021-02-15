import React, {useState, useEffect} from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import CandidateContainer from './CandidateContainer'
import ClimateQuestion from './ClimateQuestion'
const url = "http://localhost:3000/api/"
export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [hasAccount, setHasAccount] = useState(false)
    const [currentUser, setCurrentUser]= useState(null)
    const [matches, setMatches]= useState({})
    
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
            
    //       fetch("http://localhost:3000/api/auto_login", {
    //         method: "GET",
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       })
    //         .then((r) => r.json())
    //         .then((user) => {
    //             console.log(user)
    //             setCurrentUser(user)
    //         });
    //     }
    //   }, []);

    const login = () =>{
        console.log("attempting to log in")
        localStorage.clear()
    fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        headers: {
            accepts: 'application/json',
          'content-type': 'application/json'
        }, 
        body: JSON.stringify({ 
            user:{
            username: username,
            password: password
            }
         })
      })
      .then(response => response.json())
      .then((res)=> 
        {setCurrentUser(res.user)
            localStorage.setItem("token", res.jwt)
            localStorage.setItem("id",res.user.id)
            localStorage.setItem("matches", JSON.stringify(res.matches))
        setMatches(res.matches)
        
            console.log(localStorage)
            console.log(res.matches)
        
      })

    }
    
   

     const createUser = () => {
      
        fetch(url+'/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'},
                body: JSON.stringify({
                    user:{
                        username: username,
                        password: password
                    }
                })
        })
        
    }
    const handleFormSubmit = (event) => {
        console.log("form working")
        event.preventDefault()
         if (hasAccount === false)
    
         createUser()
         else 
         
         login()
    }

    const handleButtonClick = (event) => {
        
        event.preventDefault()
        if (hasAccount === false)
        setHasAccount(!hasAccount)
        else 
        setHasAccount(!hasAccount)
    }


let returnValue
 if (!currentUser){
    returnValue = 
    <div>
    <div>
    <Form onSubmit={handleFormSubmit}>
        <Form.Group size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control 
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </Form.Group>
        <Form.Group size= "lg" controlId = "password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
        
    </Form.Group>
    <Button block size = "lg" type = "submit">
        {hasAccount? 'log in': 'register'}
    </Button>
    
    </Form>
    </div>

    <div>
    {hasAccount? 'Dont have an account?': 'Already have an account?'}
    <Button onClick={handleButtonClick}>{hasAccount? 'Click to sign up instead' : 'Click to log in instead'}</Button>
    </div>
    </div>
 }
 else if (matches.length >= 7){
     returnValue = <CandidateContainer/>
 }
 else 
    returnValue = <ClimateQuestion/>
    return(
        <div>
            {returnValue}
        </div>
    )

}
