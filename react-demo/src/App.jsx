import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount (count + 1);
  }

  return (
    <>
      <Count count={count} increaseCount={increaseCount} />
      <Trip place={"Manali"} count={"2"} />
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

export default App
