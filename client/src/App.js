import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './pages/Home'
import List from './pages/List'
import Register from './pages/Register'
import User from './pages/User'

import Header from './components/nav/Header'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/list" component={List} />
        <Route exact path="/user/:id" component={User} />
      </Switch>
    </>
  )
}

export default App

