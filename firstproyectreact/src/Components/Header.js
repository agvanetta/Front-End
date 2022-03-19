import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <h1 className="Header">{this.props.title}</h1>
    )
  }
}



export default Header