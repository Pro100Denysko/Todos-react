import React, { useState } from 'react';
import NewTodoItem from './components/NewTodoItem';
import TodoItem from './components/TodoItem';
import ProgressBar from './components/ProgressBar';
import Card from './components/Card';

const list = []

function App() {
  const [todos, setTodos] = useState(list);
  const [doneTaskCount, setDoneTaskCount] = useState(0)

  const addTodoHandler = (todo) => {
    setTodos(prevTodos => {
      return [todo, ...todos]
    })
  }

  return (
    <Card>
      <NewTodoItem onAddTodo={addTodoHandler} />
      <ProgressBar
        current={todos.length - doneTaskCount}
        done={doneTaskCount}
      />
      {todos.map((element) => (
        <TodoItem
          key={element.id}
          todo={element.todo}
          done={element.done}
          doneTaskCount={doneTaskCount}
          setDoneTaskCount={setDoneTaskCount} />
      ))}
    </Card>
  );
}

export default App;
