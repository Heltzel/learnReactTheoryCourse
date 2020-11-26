import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './pages/Home'
import About from './pages/About'
import People from './pages/People'
import Error from './pages/Error'
import Person from './pages/Person'
// navbar
import Navbar from './components/Navbar'
const ReactRouterSetup = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/people">
        <People />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
    </Router>
  )
}

export default ReactRouterSetup
