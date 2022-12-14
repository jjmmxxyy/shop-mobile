import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Index from '../views'
import Cart from '../views/Cart'
import Category from '../views/Category'
import Mine from '../views/Mine'
import City from '../views/City'
import Detail from '../views/Detail'

export default function index (props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/index' component={Index}></Route>
          <Route path='/category' component={Category}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/mine' component={Mine}></Route>
          <Route path='/city' component={City}></Route>
          <Route path='/detail/:filmId' component={Detail}></Route>

          <Redirect from='/' to='/index' exact />
        </Switch>
        {props.children}
      </Router>
    </div>
  )
}
