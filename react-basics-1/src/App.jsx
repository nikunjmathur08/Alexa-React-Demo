
function App() {

  return (
    <>
      {/* A simple list, same as HTML */}
      <ul> 
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  )
}

// A function (component) that does the same job
function List() {
  return (
    <ul>
      <li>5</li>
      <li>6</li>
      <li>7</li>
    </ul>
  )
}

//Basic function to show how to use JS in JSX

function JSInJSX() {
  const firstName = "Nikunj";
  const lastName = "Mathur";

  return (
    <h3>My name is firstName + " " + lastName</h3>
  )
}

// Create a function (component) of yours, that renders your name in <h1>, and list (<ul>) of 3 things you love



// Okay, this is all cool... but this seems a bit messy & looks more or less like any other normal HTML file.
// Here comes the power of React!

export default App
