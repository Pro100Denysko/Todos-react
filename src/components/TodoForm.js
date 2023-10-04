import React, { useState } from "react";
import "./TodoForm.css"

function TodoForm(props) {
    const [enteredTodo, setEnteredTodo] = useState('')

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(event);

            const todoData = {
                todo: enteredTodo,
                done: false
            }
            props.onSaveNewTodo(todoData);
            setEnteredTodo('');
        }
    }

    return (
        <div className="todo">
            <label>TODO</label>
            <input
                type="text"
                value={enteredTodo}
                onChange={(event) => setEnteredTodo(event.target.value)}
                onKeyDown={handleKeyDown} />
        </div>
    )
}

export default TodoForm;