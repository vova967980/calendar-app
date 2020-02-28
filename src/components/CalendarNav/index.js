import React, { Component } from 'react'
import style from './style.module.scss'

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
      isOpen: !this.state.isOpen
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
            <div>prev</div>
            <div onClick={this.modeClick}>current</div>
            <div>next</div>
          </div>


          {this.state.isOpen && <div className={style.weekMonth} >
            <div>week</div>
            <div>month</div>
          </div>}
        </nav>
      </>

    )
  }
}

export default CalendarNav