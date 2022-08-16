import React, { Component } from 'react'

import { Link, Outlet } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <>
        <nav>
          <Link to='/'>Main</Link> | {' '}
          <Link to='/products'>Products</Link> | {' '}
          <Link to='/contact'>Contact</Link>
        </nav>
        <Outlet/>
      </>
    )
  }
}

