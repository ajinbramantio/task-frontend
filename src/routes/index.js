import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/index'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NoMatchPage from '../pages/404'
function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  )
}

export default Routes
