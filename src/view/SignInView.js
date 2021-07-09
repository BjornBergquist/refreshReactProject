import React, {useState} from 'react'


export const SignInView = () => {

    const [loggedInUser, setLoggedInUser] =  useState("Björn")

    return(
        <div>
           <h1>{loggedInUser}</h1>
           <button onClick = {() => setLoggedInUser("Hulken")}>Update the state value!</button>
        </div>
    )
}