import React from 'react';

const Todo = ({ todo, onRemove }) => {
  return (
    <div>
      <b>{todo.title}</b> 
      <span>({todo.work})</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const TodoList = ({ todos = [], onRemove }) => {
  return (
    <div>
    <h1>리스트</h1>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;