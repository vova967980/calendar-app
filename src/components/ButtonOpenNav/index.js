import React, { Component } from 'react'
import style from './style.module.scss'

class ButtonOpenNav extends Component{
  constructor (props) {
    super(props)
    this.state={

    }
  }

  render () {

    return (
      <div className={style.currentMonth} onClick={this.props.modeClick}>
        currentMonth
      </div>
    )

  }
}

export default ButtonOpenNav
