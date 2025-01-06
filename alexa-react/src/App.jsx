import MyList from './components/MyList';
import MyInfo from './components/MyInfo';
import Counter from './components/Counter';
import Network from './components/Network';

function App() {

  return (
    <div>
      <h1>Hello!</h1>
      <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li>Purschase Now</li>
      </ul>
      <MyList />
      <MyInfo name="Nikunj" age="19" />
      {/* <MyInfo name="Sachin" />
      <MyInfo name="Laksh" /> */}
      <Counter />
      <Network />
    </div>
  )
}
// component => network: {network}
// network: 2
export default App

// YouTube Card component => img, title, duration, creator name, no.of views, publish date
