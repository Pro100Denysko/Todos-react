import React, {useState} from "react";
import "./TodoForm.css"
import {TextField} from "@mui/material";

function TodoForm(props) {
    const [enteredTodo, setEnteredTodo] = useState('')

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
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
            <TextField label="Enter TODO"
                       variant={"outlined"}
                       margin={"normal"}
                       value={enteredTodo}
                       onChange={(event) => setEnteredTodo(event.target.value)}
                       onKeyDown={handleKeyDown}/>
        </div>
    )
}

export default TodoForm;