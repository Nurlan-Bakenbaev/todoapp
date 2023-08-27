import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from "@mui/material";

const Todo = ({ todo }) => {
  const style = {
    li:`flex justify-between capitalize items-center p-2 gap-4`,
    liComplete:`flex justify-between bg-slate-200 capitalize`,
    row:`flex  bg-slate-200 `,
    text:`ml-2 cursor-pointer`,
    textComplete:`ml-2 cursor-pointer line-thorough`,
    button:'cursor-pointer flex items-center'
  };
  return (
    <li className={style.li}>
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
