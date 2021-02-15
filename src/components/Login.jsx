import React, {useState} from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
const url = "http://localhost:3000/api/"
export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [hasAccount, setHasAccount] = useState(false)
    
    const login = () =>{
        console.log("attempting to log in")
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
      .then((res)=> console.log(res))
     

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
        .then(response => response.json())
        .then(console.log())
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




    return(
        <div>
            <div >
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
    )

}
