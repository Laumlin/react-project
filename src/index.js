import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import UserAddPage from './pages/UserAdd'
import Home from './pages/Home'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/user/add" component={UserAddPage} />
      <Route path="/" component={Home} />
    </Switch>
  </HashRouter>,
  document.getElementById('app')
)
