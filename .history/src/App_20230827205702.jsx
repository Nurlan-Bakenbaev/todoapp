import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
function App() {
  const [todos, setToDos] = useState([]);
  const [input, setInput] = useState('');
  const [isAlert,setIsAlert]= useState(false)
  console.log(input)
  //create todo
  const createTodos = async (e) => {
    e.preventDefault(e);
    if(input ===''){


    }
  };

  //read todo
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // Changed parameter name to querySnapshot
      let todosArr = []; // Changed variable name to todosArr
      querySnapshot.forEach((doc) => {
        // Changed querySnapshotforEach to querySnapshot.forEach
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setToDos(todosArr);
    });
    return () => unsubscribe(); // Added parentheses to call unsubscribe function
  }, []);

  //update todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  //delete todo

  const style = {
    bg: `h-screen w s-screen p-4 bg-gradient-to-r from-[#ff45e6] to-[#ff7445]`,
    container: `bg-[#e0e0e0] max-w-[600px] w-full m-auto rounded-md shadow-xl p-6`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between items-center`,
    input: `border p-2 w-full text-xl`,
    button: `p-3 mt-2 bg-purple-500 text-slate-100`,
    count: "text-center p-3",
    ul: "flex flex-col gap-2 ",
  };
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <div className={style.heading}>To Do App </div>
        <form onSubmit={createTodos} className={style.form}>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className={style.input}
            type="text"
            placeholder="have something to do"
          />
          <button className={style.button}>
            <AddIcon />
          </button>
        </form>
        <ul className={style.ul}>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} />
          ))}
        </ul>
        <p className={style.count}>
          You have {todos todos.length > 1 ? todos.length + " todos " : " todo"}
        </p>
      </div>
    </div>
  );
}

export default App;
