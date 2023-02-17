import React from "react";
import Todo from "./component/todo";
import Todoitems from "./component/todoitem";
import Todolist from "./component/todolist";
import './App.css';

function App(){
  return (
    <div>
      <Todo>
        <Todolist />
          <Todoitems />
        
      
      </Todo>
      
    </div>
  );
}

export default App;