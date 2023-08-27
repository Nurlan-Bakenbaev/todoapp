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
  addDoc,
  deleteDoc,
} from "firebase/firestore";
function App() {
  const [todos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  console.log(input);

  //create todo

  const createTodos = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      setIsAlert(true);
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
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
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  //styling
  const style = {
    bg: `min-h-[100vh] p-4 bg-gradient-to-r from-[#5A67D8] to-[#9B7DE1]`,
    container: `bg-gray-100 max-w-[600px] w-full m-auto rounded-md shadow-xl p-5 mt-5`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between items-center`,
    input: `border p-2 w-full text-xl outline-none`,
    button: `p-3 mt-2  text-slate-900 transform hover:scale-110 transition-transform hover:bg-blue-100`,
    count: "text-center p-3",
    ul: "flex flex-col gap-2 ",
    alert: "w-[35%] p-3 text-[red] text-xl flex items-center ",
  };
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <div className={style.heading}>To Do App </div>
        <form onSubmit={createTodos} className={style.form}>
          <input
            onChange={(e) => {
              setInput(e.target.value);
              setIsAlert(false);
            }}
            value={input}
            className={style.input}
            type="text"
            placeholder="have something to do"
          />
          <button onClick={() => createTodos} className={style.button}>
            <AddIcon />
          </button>
        </form>
        <div className={style.alert}>
          <p className={isAlert ? "animate-bounce" : "hidden"}>
            Enter a valid todo
          </p>
        </div>
        <ul className={style.ul}>
          {todos.map((todo, index) => (
            <Todo
              deleteTodo={deleteTodo}
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>

        <div className={todos.length < 1 ? "hidden" : ""}>
          <p className={style.count}>
            You have -{todos.length > 1 ? todos.length + " todos " : " todo"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
