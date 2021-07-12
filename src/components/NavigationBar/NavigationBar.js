import React, {useContext} from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/img/logotype.svg' 
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/global/provider/UserProvider'
import {Profile} from '../profile/Profile'
export const NavigationBar = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
       return (authenticatedUser) 
       ? <div className="profile"><Profile /> </div>
       : <span onClick = {() => history.push('/signin')} className="signin">Sign in</span>
    }

    return (
        <div className="navbar__wrapper">
            <img onClick = {() => history.push('/')} className="logotype" src={Logotype} alt="Illustration of a chef"/>
            {displayUserIfAuthenticated()}
        </div>
    )
}