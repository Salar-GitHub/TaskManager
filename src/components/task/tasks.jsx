import React from 'react';
import Task from './task';

const Tasks = ({tasks,deleteTask,changeTask}) => {
    return ( 
        <div>
          {tasks.map(task=>(
              <Task
               key={task.id}
               taskName = {task.taskName}
               deleteTask ={()=>deleteTask(task.id)}
               changeTask ={(event)=> changeTask(event,task.id)} 
              />
          ))}
               
       </div>
     );
}
 
export default Tasks;