import React, { Component } from 'react'

import GreenlinkLogo from 'greenlink-logo'

export default class App extends Component {
  render () {
    return (
    <React.Fragment>      
      <GreenlinkLogo variant='condensed' animate={true} />
      <br/>
      <GreenlinkLogo variant='small' animate={true} />
      <br/>
      <GreenlinkLogo variant='normal' animate={true} />
      <br/>
      <GreenlinkLogo variant='large' animate={true} />
      <br/>
      <GreenlinkLogo variant='large' iconcolor='black' textcolor='darkgreen' animate={true} />
      <br/>
      <GreenlinkLogo variant='large' iconcolor='yellow' textcolor='orange' animate={true} />
      </React.Fragment>
    )
  }
}
