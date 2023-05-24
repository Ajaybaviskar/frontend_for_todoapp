// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";
import ToDo  from "./components/ToDo";
import { addToDo, getAllToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([])

  useEffect(() => {
    getAllToDo(setToDo)
  },[])



  return (
    <div className="App">
      <div className="container">

        <h1>To Do app</h1>
        <div className="top">
          <input type="text" placeholder="Add Task" />
          <div className="Add" onClick={addToDo}>Add</div>    

        </div>
        <div className="list">
          {toDo.map((item)=> <ToDo key={item._id} text={item.text}/>)}
          <ToDo text="hi"/>
          <ToDo text="hi"/>
          <ToDo text="hi"/>

        </div>

      </div>

    </div>
  );
}

export default App;
