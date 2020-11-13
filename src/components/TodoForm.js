import React from 'react'

export default class TodoForm extends React.Component {

    constructor(props) {
        super(props)

    }

    handleInputChange = (e) => {

    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a todo"
                    // value={/* TODO: Set the `inputValue` state as the input's value */}
                    onChange={this.handleInputChange}
                />
            </form>
        );
    }
}


const TodoFormWithContext = () => {
 // TODO: Use a Consumer component to wrap the TodoForm
    // TODO: Pass the `createTask` method stored in the context value as a prop to TodoForm
  


};

   