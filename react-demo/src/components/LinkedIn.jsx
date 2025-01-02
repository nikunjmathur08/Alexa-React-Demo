import { useState } from "react"

export default function LinkedIn() {

  const [connection, setConnection] = useState(0);

  function updateConnections() {
    setConnection(connection + 1);
  }

  return (
    <>
      <button>Connections: {connection}</button>
      <button onClick={updateConnections}>Me</button>
    </>
  )
}