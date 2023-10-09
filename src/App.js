import React from 'react';
import NewTodoItem from './components/NewTodoItem';
import TodoItem from './components/TodoItem';
import ProgressBar from './components/ProgressBar';
import Card from './components/Card';
import { addTodo } from './components/Todos';
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addNewTodoHandler = event => {
    dispatch(addTodo(event.id, event.todo, event.done))
  }

  const doneCount = todos.filter((todo) => todo.done === true).length;
  const openCount = todos.filter((todo) => todo.done === false).length;

  return (
    <Card>
      <NewTodoItem onAddTodo={addNewTodoHandler} />
      <ProgressBar
        open={openCount}
        done={doneCount}
      />
      {todos.map((element) => (
        <TodoItem
          key={element.id}
          id={element.id}
          todo={element.todoItem}
          done={element.done} />
      ))}
    </Card>
  );
}

export default App;
