import React, { Component } from 'react'
import style from './style.module.scss'

class SwitchModeButton extends Component{
  constructor (props) {
    super(props)
    this.state={

    }
  }

  render () {

    return (
      <div className={style.switchModeButton} >
        This mode
      </div>
    )

  }
}

export default SwitchModeButton
