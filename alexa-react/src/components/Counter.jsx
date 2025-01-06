import { useState } from "react"

function Counter () {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={increaseCount}>Count: {count}</button>
    </div>
  )
}

export default Counter

// useEffect, useMemo, useRef

