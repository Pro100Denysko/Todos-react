import { combineReducers } from "@reduxjs/toolkit";

const ADD_TODO = "ADD_TODO"
const CHECK_TODO = "CHECK_TODO"

export function addTodo(id, todo, done) {
    return {
        type: ADD_TODO,
        id,
        todo,
        done
    }
}

export function checkTodo(id, checked) {
    return {
        type: CHECK_TODO,
        id,
        checked
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    todoItem: action.todo,
                    done: action.done
                }
            ];
        case CHECK_TODO:
            return state.map((todo) => {
                if (action.id === todo.id) {
                  return {
                    ...todo,
                    done: action.checked
                  };
                } else {
                  return todo;
                }
              });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos
});

export default todoApp;