import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Index from '../views'
import Brand from '../views/Brand'
import Category from '../views/Category'
import Mine from '../views/Mine'

export default function index(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/index' component={Index}></Route>
          <Route path='/brand' component={Brand}></Route>
          <Route path='/category' component={Category}></Route>
          <Route path='/mine' component={Mine}></Route>

          <Redirect from='/' to='/index' exact />
        </Switch>
        {props.children}
      </Router>
    </div>
  )
}
