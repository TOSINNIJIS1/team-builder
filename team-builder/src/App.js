import React, { useState } from 'react';
import './App.css';
import Users from "./mapping"
import data from "./data"
import Prop from "./Props"
// import Properties from './props';

const App = () => {

  const [Data, setData] = useState(data);

  const newData = user => {
    setData([...Data, user])
  }


  return (
    <div className="App">
      <div className="App-header">

      <Users newData={newData} />
      <h2> User Lists </h2>
      <Prop List={Data}/>

      </div>
    </div>
  );
}
export default App