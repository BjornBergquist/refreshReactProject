import React, {useState, useContext} from 'react'
import {UserContext} from '../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'

export const SignInView = () => {

    const [username, setUsername] =  useState("")
    const [password, setPassword] =  useState("")
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const login = () => {
        setAuthenticatedUser(username)
        localStorage.setItem("username", username)
        history.push('/')
    }

    return(
        <div>
           <span>Username: </span><input onChange = {event => setUsername(event.target.value)}/> <br />
           <span>Password: </span><input onChange = {event => setPassword(event.target.value)} type="password"/> <br />
           <button onClick = {() => login()}>Log in</button>
        </div>
    )
}