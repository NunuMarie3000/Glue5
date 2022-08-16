import React, { Component } from 'react'

// import { Link, Outlet } from 'react-router-dom'

import './index.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Main/>
        <Footer year={2022}/>
      </>
    )
  }
}

