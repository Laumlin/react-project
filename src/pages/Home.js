import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <header>
          <h1>Welcome!</h1>
        </header>

        <main>
          <Link to="/user/add">添加用户</Link>
        </main>
      </div>
    )
  }
}