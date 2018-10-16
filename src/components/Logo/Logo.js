import React from 'react'
import burgerLogo from '../../assets/images/127 burger-logo.png'
import classes from './Logo.module.css'

const logo = props => (
  // <div className={classes.Logo} style={{ height: props.height }}>
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger App" />
  </div>
)

export default logo
