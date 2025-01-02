import { useState } from 'react'
import './App.css'
import LinkedIn from './components/LinkedIn';

function App() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{
    title: "todo1",
    description: "desc1",
    completed: "false",
  }, {
    title: "todo2",
    description: "desc2",
    completed: "true",
  }, {
    title: "todo3",
    description: "desc3",
    completed: "false",
  }, ]);

  function addTodo() {
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo",
      completed: "false"
    }])
  }

  function increaseCount() {
    setCount (count + 1);
  }

  return (
    <>
      <Count count={count} increaseCount={increaseCount} />
      <Trip place={"Manali"} count={count} />
      <LinkedIn />
      <button onClick={addTodo}>Add random Todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} completed={todo.completed}/>
      })}
    </>
  )
}

function Count({ count, increaseCount }) {
  return (
    <button onClick={increaseCount}>Count: {count}</button>

  )
}

function Trip ({ place, count }) {
  return (
    <h4>I've been to {place}, {count} times!</h4>
  )
}

function Todo(props) {
  return (
    <>
      <h1>Title: {props.title}</h1>
      <h2>Description: {props.description}</h2>
      <h5>Completed: {props.completed}</h5>
    </>
  )
}

export default App
