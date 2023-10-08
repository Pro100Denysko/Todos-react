import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {checkTodo} from "./Todos";
import {Checkbox, FormControlLabel} from "@mui/material";
import styled from "styled-components";

const StyledTodoItem = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

function TodoItem(props) {
    const [checked, setChecked] = useState(false)

    const dispatch = useDispatch();

    const handleChecked = () => {
        setChecked(!checked)
        dispatch(checkTodo(props.test, !checked))
    }

    return (
        <StyledTodoItem>
            <FormControlLabel control={
                <Checkbox checked={checked}/>}
                              onChange={handleChecked}
                              label={props.todo}
            />
        </StyledTodoItem>
    )
}

export default TodoItem;