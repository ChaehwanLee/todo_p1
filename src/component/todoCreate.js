import React from "react";

const CreateUser = ({ title, work, onChange, onCreate }) => {
  return (
    <div>
      <input
        do="title"
        placeholder="할일"
        onChange={onChange}
        value={title}
      />
      <input
        do="work"
        placeholder="내용"
        onChange={onChange}
        value={work}
      />
      <button onClick={onCreate}>추가</button>
    </div>
  );
};

export default CreateUser;
