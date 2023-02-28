import React, { useState } from "react";
import Todoitem from './todoitem';

function Todolist(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState({
        id: "",
        text: "",
        fin: ""
    });
    return (
        <div>
            <p>{count}번 만들었습니다</p>
            <button onClick={()=> setCount(count+1)}> 누르시오 </button>
            {todos.map(todo =>(
                <Todoitem
                    id={todo.id}
                    text={todo.text}
                    fin={todo.fin}
                />
            ))}
        </div>
    );
}

export default Todolist;