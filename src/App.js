// // import React from "react";
// import React, { useRef, useState } from 'react';
// import Todo from "./component/todo";
// import Todocreate from "./component/todoCreate";
// import Todolist from "./component/todolist";
// // import Itemlist from "./component/todoitem";
// import './App.css';

// const App = () => {
//   const[inputs, setInputs] = useState({
//     title:'',
//     work:'',
//   });
//   const { title, work } = inputs;

//   const onChange =(e) => {
//     const {title, value} = e.target;
//     setInputs((lasttodos)=>({
//       ...lasttodos,
//       [title]: value,
//     }));
//   };

//   const [todo, setTodo] = useState([
//     {
//       id: 1,
//       title: '기상',
//       work: '물 한 잔 마시기',
//     },
//     {
//       id: 2,
//       title: '뉴스보기',
//       work: '경제 뉴스 읽기',
//     },
//     {
//       id: 3,
//       title: '일과시작',
//       work: '이메일 처리하기',
//     },
//   ]);

//   const nextId = useRef(0);
//   const onCreate = () => {
//     const titles ={
//       id: nextId.current,
//       title,
//       work,
//     };

//   setTodo((lastTitle)=>[...lastTitle, titles]);
//     setInputs({
//       title: '',
//       work: '',
//     });
//     nextId.current += 1;
//   };

//   const onRemove = (id) => {
//     setTodo((lastTitle) => lastTitle.filter((item) => item.id !== id));
//   };  

//   return (

//       <div>
//       <Todo />
//       <Todocreate
//       title={title}
//       work={work}
//       onChange={onChange}
//       onCreate={onCreate} 
//       />
      
//       <Todolist todo={todo} onRemove={onRemove}/>

//       </div>
//     );
// };

// export default App;


import React, { useRef, useState } from 'react';
import Todo from "./component/todo";
import Todocreate from "./component/todoCreate";
import Todolist from "./component/todolist";
import './App.css';
import TodoList from './component/todolist';

const App = () => {
  const [inputs, setInputs] = useState({
    title: '',
    work: '',
  });
  const { title, work } = inputs;

  const onChange = (e) => {
    const { title, value } = e.target;
    setInputs((lasttodos) => ({
      ...lasttodos,
      [title]: value,
    }));
  };

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: '기상',
      work: '물 한 잔 마시기',
    },
    {
      id: 2,
      title: '뉴스보기',
      work: '경제 뉴스 읽기',
    },
    {
      id: 3,
      title: '일과시작',
      work: '이메일 처리하기',
    },
  ]);

  const nextId = useRef(0);

  const onCreate = () => {
    const newTodo = {
      id: nextId.current,
      title,
      work,
    };

    setTodo((lastTodos) => [...lastTodos, newTodo]);
    setInputs({
      title: '',
      work: '',
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodo((lastTodos) => lastTodos.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Todo />
      <Todocreate
        title={title}
        work={work}
        onChange={onChange}
        onCreate={onCreate} 
      />
      <Todolist todo={todo} onRemove={onRemove} />
    </div>
  );
};

export default App;
