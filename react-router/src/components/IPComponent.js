import React, { Component } from 'react'

export default class IPComponent extends Component {
  render() {
    return (
      <>
        <h1>Individual Product #{this.props.idparam}</h1>
        {/* <p>I want to render an individual product and it's information in this component.</p> */}
      </>
    )
  }
}
