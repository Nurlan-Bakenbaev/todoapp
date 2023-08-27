import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos,setToDos]= useState(['learn to do','Leet code','learn Backend'])
  const style = {
    bg: `h-screen w s-screen p-4 bg-gradient-to-r from-[#ff45e6] to-[#ff7445]`,
    container:`bg-state-100 bg-white- max-w-[600px] w-full m-auto rounded-md shadow-xl p-6`,
    heading:`text-3xl font-bold text-center text-gray-800 p-2`,
    form:`flex justify-between items-center`,
    input:`border p-2 w-full text-xl`,
    button:`p-3 mt-2 bg-purple-500 text-slate-100`,
    count:'text-center p-3'
  };
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <div className={style.heading}>To Do App </div>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="have something to do" />
          <button className={style.button}>
            <AddIcon />
          </button>
        </form>
        <ul>
        {todos.map((todo,index)=>(
          <Todo key={index} todo={todo} />
        ))}

        </ul>
        <p className={style.count}>You have {todos.length >1 ? todos.length +' todos ':' todo' }</p>
      </div>
    </div>
  );
}

export default App;
