import React from "react";
import Todo from "./component/todo";
import Todoitems from "./component/todoitem";
import Todolist from "./component/todolist";
import './App.css';

function App(){

  const onDelete = (todoid) => {
    const todolist = data.filter((id) => id.id !== todoid)
    setData(todolist)
  }

  return (
    <div className="App">
    <TodoEditor onCreate={onCreate} />
    <TodoList onDeltete={onDelete} todolist={data} />
    
      <Todo>
        <Todolist />
          <Todoitems />
        
      
      </Todo>
      
    </div>
  );
}

export default App;