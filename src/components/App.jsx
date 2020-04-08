import React, { Component } from 'react';
import Tasks from './task/tasks';


class App extends Component {
    state = {
        tasks: [ ],
                showtask : false,
                task : ''
      }
handleShowTask=()=>{
    this.setState({showtask : !this.state.showtask});
    console.log(this.state.showtask)
}
handleDeleteTask=id=>{
    const tasks = [...this.state.tasks]
    const taskFilter = tasks.filter(p=>p.id!==id)
    this.setState({tasks : taskFilter})

}

handleChangeTask =(event,id)=>{
    const tasks =[...this.state.tasks]
    const taskIndex = tasks.findIndex(p=>p.id===id)
    const task = tasks[taskIndex]
    task.taskName = event.target.value 
    tasks[taskIndex] = task
    this.setState({tasks})    
    console.log(event)
}
handleCreateTask =()=>{
    const tasks =[...this.state.tasks];
    const task = {
        id : Math.floor(Math.random()*1000),
        taskName : this.state.task
    };
    tasks.push(task);
    this.setState({tasks, task : ''});
    }
setTask =(event)=>{
    this.setState({task : event.target.value})
}   


    render() {

        const {tasks,showtask} = this.state;
        const styles ={
            textAlign:"center"
        }
        const buttonStyle={
            padding : "1em",
            backgroundColor :"Pink"
        }
        let task =null;
        if(showtask){
                task = <Tasks tasks ={tasks} deleteTask={this.handleDeleteTask} changeTask={this.handleChangeTask} />
        }
        return (
            <div style={styles}>
                    <h2>Task Manager</h2>
                    <h4>count : {tasks.length}</h4>
                    <input
                      type = "text"
                      placeholder ="New task"
                      onChange ={this.setTask} 
                      value ={this.state.task}
                    />
                    <button onClick = {this.handleCreateTask}>Add</button>
                    <hr/>
                <div>  
                        <button onClick={this.handleShowTask} style={buttonStyle}>Show Tasks</button>
                        {task}
                </div>
            </div>
          );
    }
}
 
export default App;