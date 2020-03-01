import React from 'react'
import ToDoList from './ToDoList.js'
import './Styles.css'

class App extends React.Component{
  render(){
    return(
      <div className ="App">
        We Created our first Class!
        <ToDoList/>
      </div>
    )
  }

}

export default App