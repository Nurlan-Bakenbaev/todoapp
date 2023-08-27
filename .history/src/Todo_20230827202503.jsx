import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";

const Todo = ({ todo }) => {
  const style = {
    li: `flex justify-between bg-slate-200 capitalize items-center p-3`,
    liComplete: `flex justify-between bg-slate-400 capitalize`,
    row: `flex  p-2`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-thorough `,
    button: "cursor-pointer flex items-center",
  };
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input type="checkbox" checked={todo.completed ? 'checked' : ''}/>
        <p className={todo.completed ? style.textComplete : style.text}> {todo.text}</p>
      </div>
      <Button color="success">
        <DeleteForeverIcon />
      </Button>
    </li>
  );
};

export default Todo;
