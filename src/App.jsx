import { useState } from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [counter, setCounter] = useState(1);


const fruits = ["apple", "bannan", "orange", "grape", "strawberry", "pineapple", "mango"]
 const onClickHandler = () => {
    setCounter(counter + 1);
  }

  const onChanngeHandler = (event) => {
    console.log(event);
    setMessage(event.target.value);
  }

  const filteredFruits = () => {
    const caseCorrectedMessage = message.toLowerCase();
    return fruits.filter((fruit) => fruit.toLowerCase().includes(caseCorrectedMessage));
  }


  return (
    <>
    <p>{message}</p>
    <p>Counter Value: {counter}</p>
    < hr/>
    <button onClick={onClickHandler}>Update</button>
    <div>
      <label htmlFor='username'> My Input Box </label>
      <input id="username" type ='text' value = {message} onChange={onChanngeHandler}></input>
    </div>
    <hr />
    <div>
      <p>List of Fruits</p>
      <ul>
        {
          filteredFruits().map((fruit) => <li key={fruit}>{fruit}</li>)
        }
      </ul>
    </div>
    </>
  )
}

export default App
