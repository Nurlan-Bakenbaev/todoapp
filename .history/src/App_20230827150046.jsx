import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos,setToDos]= useState(['learn to do',])
  const style = {
    bg: `h-screen w s-screen p-4 bg-gradient-to-r from-[#ff45e6] to-[#ff7445]`,
  };
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <div className={style.heading}>To Do App </div>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add todo" />
          <button className={style.button}>
            <AddIcon />
          </button>
        </form>
        <ul>
        {todos.map((todo,index)=>(
          <Todo key={index} todo={todo} />
        ))}
       
        </ul>
      </div>
    </div>
  );
}

export default App;
