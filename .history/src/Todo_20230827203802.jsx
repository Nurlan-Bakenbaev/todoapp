import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";

const Todo = ({ todo, toggleComplete }) => {
  const style = {
    li: `flex justify-between bg-slate-200 capitalize items-center p-2`,
    liComplete: `flex justify-between bg-slate-400 capitalize  p-2`,
    row: `flex  p-3 m-`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: "cursor-pointer flex items-center",
  };
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}>
          {todo.text}
        </p>
      </div>
      <Button color="success">
        <DeleteForeverIcon />
      </Button>
    </li>
  );
};

export default Todo;
