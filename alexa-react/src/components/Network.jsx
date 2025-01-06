import { useState } from "react"


function Network() {
  const [network, setNetwork] = useState(2);

  return (
    <div>
      <h3>Network: {network}</h3>
    </div>
  )
}

export default Network