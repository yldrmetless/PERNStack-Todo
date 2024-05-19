import axios from "axios";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setTodos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="w-full py-36 flex justify-center items-center flex-col gap-y-12">
      <InputTodo refreshTodos={getTodos} />
      <ListTodos todos={todos} refreshTodos={getTodos} />
    </div>
  );
}

export default App;
