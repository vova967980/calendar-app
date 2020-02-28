import React, { Component } from 'react'
import style from './style.module.scss'
import ButtonGo from '../ButtonGo'
import ButtonOpenNav from '../ButtonOpenNav'
import SwitchModeButton from '../SwitchModeButton'

class CalendarNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,

    }
    this.modeClick = this.modeClick.bind(this)
  }


  modeClick(){
    this.setState(state=>({
      isOpen: !state.isOpen
    }));
  }

  next(){

  }

  prev(){

  }

  render () {

    return (

      <>
        <nav className={style.navigation}>
          <div className={style.currentNextPrev}>
            <ButtonGo />
            <ButtonOpenNav modeClick={this.modeClick}/>
            <ButtonGo />
          </div>


          {this.state.isOpen && <div className={style.weekMonth} >
            <SwitchModeButton />
            <SwitchModeButton />
          </div>}
        </nav>
      </>

    )
  }
}

export default CalendarNav