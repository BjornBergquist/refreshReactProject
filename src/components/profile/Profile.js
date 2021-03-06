import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom';
import RoutingPath from '../../routes/RoutingPath';
import { UserContext } from '../../shared/global/provider/UserProvider'
import "./Profile.css"

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("username")
        setAuthenticatedUser(false)
        history.push(RoutingPath.homeView)
    }

    return (
        <div className="profile__wrapper">
            <img className="profile__img" src={"https://www.thispersondoesnotexist.com/image"} alt="" />
            <span className="profile__username">{authenticatedUser}</span>
            <div className="profile__dropdown">
                <a onClick={() => history.push(RoutingPath.settingsView)}>Settings</a>
                <a onClick={() => history.push(RoutingPath.profileView)}>Profile</a>
                <span className="break"/>
                <a onClick={() => logout()}>Log Out</a>
            </div>
        </div>
    )
}