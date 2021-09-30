import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './pages/Home'
import List from './pages/List'
import Register from './pages/Register'

import Header from './components/nav/Header'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/list" component={List} />
      </Switch>
    </>
  )
}

export default App

