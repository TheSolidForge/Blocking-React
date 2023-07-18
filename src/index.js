import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import HelpAndSupport from './views/help-and-support'
import SolidForgeLanding from './views/solid-forge-landing'
import LogInAndBuy from './views/log-in-and-buy'
import ScratchLanding from './views/scratch-landing'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={HelpAndSupport} exact path="/help-and-support" />
        <Route component={SolidForgeLanding} exact path="/" />
        <Route component={LogInAndBuy} exact path="/log-in-and-buy" />
        <Route component={ScratchLanding} exact path="/scratch-landing" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
