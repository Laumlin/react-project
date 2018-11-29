import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'
import UserAddPage from './pages/UserAdd'

ReactDOM.render(
  <HashRouter>
    <Route exact path="/user/add" component={UserAddPage} />
  </HashRouter>,
  document.getElementById('app')
)
