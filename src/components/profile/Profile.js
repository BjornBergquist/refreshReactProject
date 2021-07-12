import React, {useContext} from 'react'
import { UserContext } from '../../shared/global/provider/UserProvider'
import "./Profile.css"

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    return (
        <div className="profile__wrapper">
            <img className="profile__img" src={"https://www.thispersondoesnotexist.com/image"} alt="" />
            <span className="profile__username">{authenticatedUser}</span>
        </div>
    )
}