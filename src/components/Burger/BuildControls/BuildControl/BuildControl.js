import React from 'react'
import cllasses from './BuildControl.module.css'

const buildControl = props => (
  <div className={cllasses.BuildControl}>
    <div className={cllasses.Label}>{props.label}</div>
    <button className={cllasses.Less}>Less</button>
    <button className={cllasses.More} onClick={props.added}>
      More
    </button>
  </div>
)

export default buildControl
