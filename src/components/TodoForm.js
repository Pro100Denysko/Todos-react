import React, {useState} from "react";
import {TextField} from "@mui/material";
import styled from "styled-components";

const StyledTodoForm = styled.div`
  display: flex;
  padding: 0.2rem;
  margin: 0.5rem 0;
  flex-direction: row;
  justify-content: center;
`;

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
        <StyledTodoForm>
            <TextField label="Enter TODO"
                       variant={"outlined"}
                       margin={"normal"}
                       value={enteredTodo}
                       onChange={(event) => setEnteredTodo(event.target.value)}
                       onKeyDown={handleKeyDown}/>
        </StyledTodoForm>
    )
}

export default TodoForm;