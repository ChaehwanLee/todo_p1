// import React, { useState } from "react";
// import Todoitem from './todoitem';

import React from 'react';

const List = ({ list, onRemove }) => {
  return (
    <div>
      <b>{list.title}</b> <span>({list.work})</span>
      <button onClick={() => onRemove(list.id)}>삭제</button>
    </div>
  );
};

const TodoList = ({ lists, onRemove }) => {
  return (
    <div>
      {lists.map((list) => (
        <List list={list} key={list.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;



// function Todolist(){
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState({
//         id: "",
//         text: "",
//         fin: ""
//     });
//     return (
//         <div>
//             <p>{count}번 만들었습니다</p>
//             <button onClick={()=> setCount(count+1)}> 누르시오 </button>
//             {todos.map(todo =>(
//                 <Todoitem
//                     id={todo.id}
//                     text={todo.text}
//                     fin={todo.fin}
//                 />
//             ))}
//         </div>
//     );
// }

// export default Todolist;