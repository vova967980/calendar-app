import React from 'react'
import './App.scss'
import CalendarNav from './components/CalendarNav'


class App extends React.Component{
  constructor (props) {
    super(props)
    this.state={

    }
  }

  render () {

    return (
      <div className="calendar">
        <CalendarNav/>
      </div>
    )

  }

}

export default App
