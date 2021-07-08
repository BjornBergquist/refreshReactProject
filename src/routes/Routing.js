import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { RecipeView } from '../view/RecipeView'

export const Routing = () =>{
    return (
        <Router>
            <Switch>
                <Route exact path="/recipe" component={RecipeView}/>
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}
