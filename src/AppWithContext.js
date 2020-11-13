import React from 'react';
import TodoContext from "./contexts/TodoContext";
import App from "./App";

class AppWithContext extends React.Component{
    constructor() {
        super();
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        this.state = {
            createTask: this.createTask,
            deleteTask: this.deleteTask,
            tasks: storedTasks || {}
        }
    }

    createTask = (task) => {
        debugger
        const nextTaskId = (new Date()).getTime();
        const newTask =   {
            [nextTaskId]:
            {
                id: nextTaskId,
                message: task,
            },
        }
        this.setState((state, props) => ({
            tasks: {...state.tasks, ...newTask}
        }),
        () => this.updateLocalStorageTasks())
    };

    deleteTask = (id) => {
        this.setState((state, props) => {
            const tasksWithDeletion = { ...state.tasks };
            delete tasksWithDeletion[id];
            return {
              tasks: tasksWithDeletion,
            };
          },
            () => this.updateLocalStorageTasks());;
    };

    updateLocalStorageTasks = () => {
        console.log(this.state.tasks);
        const jsonTasks = JSON.stringify(this.state.tasks);
        localStorage.setItem('tasks', jsonTasks);
    }

    render() {
        return (
            
           <TodoContext.Provider value={this.state}>
               <App/>
           </TodoContext.Provider>
          // TODO: Use a Provider component to wrap the App component
          // TODO: Use the AppWithContext state as the Provider component's `value`
        );
    }
}

export default AppWithContext;
