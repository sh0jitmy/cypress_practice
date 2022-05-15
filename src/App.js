import logo from './logo.svg';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

//App.js
import React, {useState} from 'react';

const App = () => {
 const [count, setCount] = useState(0);

 const increment = () => {
  setCount(count + 1);
 };

 const decrement = () => {
  setCount(count - 1);
 };

 const handleReset = () => {
  setCount(0);
 };
 return (
  <div className="container">
   <span className="counter">{count}</span>
   <button className="increment" onClick={increment}>
    +
   </button>
   <button className="decrement" onClick={decrement}>
    -
   </button>

   <button className="reset" onClick={handleReset}>
    数値をリセット
   </button>
  </div>
 );
};

export default App
