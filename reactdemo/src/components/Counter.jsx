import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={increaseCount}>Count: {count}</button>
    </>
  )
}

export default Counter