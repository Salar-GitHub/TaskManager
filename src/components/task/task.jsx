import React from 'react';

import './task.css'

const Task = ({taskName,deleteTask,changeTask,}) => {
    return ( 
        <div className="task">
         <p>{`${taskName}`}</p>
         <input type = "text" placeholder ="New Task" onChange ={changeTask}  />
         <button onClick = {deleteTask}>Delete</button>
        </div>
     );
}
 
export default Task ;