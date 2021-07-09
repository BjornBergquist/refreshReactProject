import React from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/img/logotype.svg' 
import { useHistory } from 'react-router-dom'


export const NavigationBar = () => {
    const history = useHistory();
    return (
        <div className="navbar__wrapper">
            <img onClick = {() => history.push('/')} className="logotype" src={Logotype} alt="Illustration of a chef"/>
            <span onClick = {() => history.push('/signin')} className="signin">Sign in</span>
        </div>
    )
}