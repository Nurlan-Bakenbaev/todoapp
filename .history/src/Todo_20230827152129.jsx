import React from "react";


const Todo = ({ todo }) => {
  const style = {};
  return (
    <li className={style.li}>
      Todo
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.text}> {todo}</p>{" "}
      </div>
      <Button
        color="success"></Button>
    </li>
  );
};

export default Todo;
