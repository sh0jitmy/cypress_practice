import logo from './logo.svg';
import './App.css';

//App.js
import React, {useState} from 'react';
import useCustomHook from './hooks/hooks.js'


const App = () => {
 const [count, setCount] = useState(0);
 const hookdata = useCustomHook();

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
    <p>{hookdata}</p>
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
