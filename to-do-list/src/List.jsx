import React, {useState} from 'react'

function Todolist(){
    /* 2 state variables 
    - tasks: list of all tasks
    - newTask: new task to be added to list*/
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    // handle input from text box, see text when writing
    function handleInputChange(event){
        setNewTask(event.target.value)}
    // add a task to list
    function addTask(){
        if (newTask.trim() !== ""){ // make sure task isnt empty string
            setTasks(t => [...t, newTask]);
            setNewTask(""); // after adding task reset string to ""
        }
        
    }
    // delete a task from list
    function deleteTask(index){
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }
    // move a task up the list
    function raiseTask(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = 
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    // move a task down the list
    function lowerTask(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = 
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);}}
    
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
          addTask();}}
    

    return(
        <div className='to-do-list'>
            <h1> To-Do List</h1>
            <div>
                <input 
                type = 'text'
                placeholder='Enter task'
                value={newTask}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                style={{ marginRight: '8px' }}/>
                <button
                className='add-button'
                onClick={addTask}>Add Task</button>

            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        {/* Raise task button */}
                        <button 
                        className='move-button'
                        onClick={() => raiseTask(index)}> 
                        ↑
                        </button>
                        {/* Lower task button */}
                        <button 
                        className='move-button'
                        onClick={() => lowerTask(index)}> 
                        ↓
                        </button>
                        {/* Delete task button */}
                        <button 
                        className='delete-button'
                        onClick={() => deleteTask(index)}> 
                        Delete Task
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );

}

export default Todolist;