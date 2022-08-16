import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>&copy;StormyWeatherCreations, {this.props.year}</footer>
    )
  }
}
