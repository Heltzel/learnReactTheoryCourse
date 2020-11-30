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
      <Navbar />
      {/* Switch: only the first one that matches */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup
