import React from 'react'

const Task = (props) =>{
    const handleClick = (e)=>{
        props.deleteTask(props.data.id);
    };

    return (
        <li>
            <h1>{props.data.message}</h1>
            <button onClick={handleClick}>Delete Task</button>
        </li>
    )
}

export default Task;
