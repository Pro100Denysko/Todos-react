import React, {useState} from "react";
import "./TodoItem.css";
import {useDispatch} from 'react-redux'
import {checkTodo} from "./Todos";
import {Checkbox, FormControlLabel} from "@mui/material";

function TodoItem(props) {
    const [checked, setChecked] = useState(false)

    const dispatch = useDispatch();

    const handleChecked = () => {
        setChecked(!checked)
        dispatch(checkTodo(props.test, !checked))
    }

    return (
        <div className='todo_item'>
            <FormControlLabel control={<Checkbox defaultChecked={false}/>}
                              onChange={handleChecked}
                              label={props.todo}
            />
        </div>
    )
}

export default TodoItem;