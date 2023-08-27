import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from "@mui/material";

const Todo = ({ todo }) => {
  const style = {
    li:`flex justify-between bg-slate-200 capitalize`,
    row:``,
    text:``,
  };
  return (
    <li className={style.li}>
      Todo
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.text}> {todo}</p>
      </div>
      <Button
        color="success"><DeleteForeverIcon/></Button>
    </li>
  );
};

export default Todo;
