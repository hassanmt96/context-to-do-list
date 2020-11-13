import React from 'react'
import TodoContext from "../contexts/TodoContext";
import Task from "./Task";


class TodoList extends React.Component {
    constructor() {
        super();
    }
    static contextType = TodoContext;
    render() {
        const {tasks, deleteTask} = this.context
        return (
            <ul>
               {Object.values(tasks).map(task => {
                   return (
                           <Task key={task.id} data={{...task}} deleteTask={deleteTask} />
                   );
               })}
            </ul>

        )
    }
}

export default TodoList
