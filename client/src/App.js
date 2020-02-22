import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({});

  // fetch('/get-data')
  // .then(response => response.json())
  // .then(data => setData(data));

  
  fetch('/create', {
    headers: {
      'Content-Type' : 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ name : 'Bob', age: 27})
  })
  .then(response => response.json())
  .then(data => console.log(data));


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
