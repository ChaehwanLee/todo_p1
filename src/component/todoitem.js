import React from 'react';

const DeleteButton = (props) => {
  return (
    <button onClick={props.onClick}>Delete</button>
  );
};

export default DeleteButton;

{/* <button onClick={() => {
    console.log(id)
    if (window.confirm('${id}의 할 일 을 삭제하시겠습니까')) {
        onDelete(id);
    }

}}
> 삭제하시겠습니까

</button> */}



// function Todoitem({id, fin, text}){
//     const [id, setId]
// }


// import React from 'react';

// const DeleteButton = (props) => {
//   return (
//     <button onClick={props.onClick}>Delete</button>
//   );
// };

// export default DeleteButton;

// ================

//import React, { useState } from 'react';
//import DeleteButton from './DeleteButton';

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleDeleteClick = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <DeleteButton onClick={handleDeleteClick} />
//     </div>
//   );
// };

// export default App;