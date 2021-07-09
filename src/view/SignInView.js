import React, {useState} from 'react'


export const SignInView = () => {

    const [loggedInUser, setLoggedInUser] =  useState("")
    const [password, setPassword] =  useState("")

    return(
        <div>
           <span>Username: </span><input onChange = {event => setLoggedInUser(event.target.value)}/> <br />
           <span>Password: </span><input onChange = {event => setPassword(event.target.value)} type="password"/> <br />
           <button>Log in</button>
        
        </div>
    )
}