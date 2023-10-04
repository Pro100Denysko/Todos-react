import React from "react";
import TodoForm from "./TodoForm";

function NewTodoItem(props) {
    const saveTodoDataHandler = (enteredTodoData) => {
        const todoData = {
            ...enteredTodoData,
            id: Math.random().toString()
        };
        props.onAddTodo(todoData);
    }

    return (
        <TodoForm onSaveNewTodo={saveTodoDataHandler} />
    )
}

export default NewTodoItem;