import React, { useState } from "react";
import "./TodoItem.css";
import { useDispatch } from 'react-redux'
import { checkTodo } from "./Todos";

function TodoItem(props) {
    const [checked, setChecked] = useState(false)

    const dispatch = useDispatch();

    const handleChecked = () => {
        setChecked(!checked)
        dispatch(checkTodo(props.test, !checked))
    }

    return (
        <div className='todo_item'>
            <label class="checkbox-label">
                <input type="checkbox" class="checkbox-input"
                    checked={checked}
                    onChange={handleChecked}
                />
                {props.todo}
            </label>
        </div>
    )
}

export default TodoItem;