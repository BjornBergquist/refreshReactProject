import React, {useEffect, useContext} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { RecipeView } from '../view/RecipeView'
import { SignInView } from '../view/SignInView'
import { UserContext } from '../shared/global/provider/UserProvider'
import { ProfileView } from '../view/ProfileView'
import { SettingsView } from '../view/SettingsView'
import RoutingPath from './RoutingPath'

export const Routing = (props) =>{

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticated = (navigateToView) => {
        return authenticatedUser ? HomeView : navigateToView
    }

    const blockRouteIfNotAuthenticated = (navigateToView) => {
        return !authenticatedUser ? SignInView : navigateToView
    }

    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }

    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    },[])
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.recipeView} component={RecipeView}/>
                <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)}/>
                <Route exact path={RoutingPath.profileView} component={blockRouteIfNotAuthenticated(ProfileView)}/>
                <Route exact path={RoutingPath.settingsView} component={blockRouteIfNotAuthenticated(SettingsView)}/>
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}
