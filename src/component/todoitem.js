// import React, { useRef } from 'react';
// import TodoList from './component/todolist';
// import CreateTodo from './component/todoCreate';

// import CreateUser from "./todoCreate";
// import TodoList from "./todolist";

// const App = () => {
//   const[inputs, setinputs] = useState({
//     title:'',
//     work:'',
//   });
//   const {title, work} = inputs;

//   const [title, setTitle] = useState)[]
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

//   const nextId = useRef(4);
//   const onCreate = () => {
//     const title ={
//       id: nextId.current,
//       title,
//       work,
//     };
//   setTodo((lasttitle)=>[...lasttitle, title]);
//     setInputs({
//       title: ",
//       work: ",
//     });
//     nextId.current += 1;
//   };
  
//   return ())
// };

// export default App;




// const { title, work} = inputs;

// const onChange =(a) => {
//   const {title, value} = a.target;
//   setInputs((lasttodos)=>({
//     ...lasttodos,
//     [title]: value,
//   }));
// };

// const [titles, setTodo] = useState([
//   {
//     id: 1,
//     title: '기상',
//     work: '물 한 잔 마시기',
//   },
//   {
//     id: 2,
//     title: '뉴스보기',
//     work: '경제 뉴스 읽기',
//   },
//   {
//     id: 3,
//     title: '일과시작',
//     work: '이메일 처리하기',
//   },
// ]);

// const nextId = useRef(4);
// const onCreate = () => {
//   const title ={
//     id: nextId.current,
//     title,
//     work,
//   };
// setTodo((lastTitle)=>[...lastTitle, title]);
//   setInputs({
//     title: '',
//     work: '',
//   });
//   nextId.current += 1;
// };

// return (
//   <div>
//   <todoCreate
//   title={title}
//   work={work}
//   onChange={onChange}
//   onCreate={onCreate} />
  
//   <TodoList title={title}/>
//   </div>
// );

// export default todoitems

