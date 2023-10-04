import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const [checked, setChecked] = useState(false)

    const handleChecked = () => {
        setChecked(!checked)
        props.setDoneTaskCount(checked ? props.doneTaskCount - 1 : props.doneTaskCount + 1);
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