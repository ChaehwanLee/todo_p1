import React from 'react';

const CreateUser = ({ title, work, onChange, onCreate }) => {
  return (
    <div>
      <input
        name="title"
        placeholder="할일"
        onChange={onChange}
        value={title}
      />
      <input
        name="work"
        placeholder="내용"
        onChange={onChange}
        value={work}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default CreateUser;
