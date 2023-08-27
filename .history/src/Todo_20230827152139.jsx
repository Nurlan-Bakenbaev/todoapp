import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
        color="success"><DeleteForeverIcon/></Button>
    </li>
  );
};

export default Todo;
