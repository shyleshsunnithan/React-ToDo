import React from "react"
//import ReactDOM from "react-dom"
import ToDoListItems from './ToDoListItems.js'
import './Styles.css'

export default class ToDoList extends React.Component{
    state={
        list_title:"",
        current_state: "",
        todos:[]

    }
    render(){
        return(
            <div className="todo-list">
                <h2>To Do List ...</h2>
                <label>Title</label>
                <br></br>
                <input 
                    placeholder="Enter Title....." 
                    type="text" 
                    value={this.state.list_title} 
                    onChange={(event)=> {this.setState({list_title=event.target.value})}}
                />
                <br></br>
                <hr></hr>
                <br></br>
                {
                    this.state.todos.map(todo=>{
                        return(
                           <ToDoListItems title={todo.title} completed={todo.completed}/>
                        )
                    })
                }
                <input 
                    placeholder="Enter Your ToDo" 
                    type="text" 
                    value={this.state.current_state}
                    onChange={(event)=>{this.setState({current_state=event.target.value})}}
                    />
                <button>Add Item To List</button>

            </div>
        )
    }
}