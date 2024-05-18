import React, { useState, useEffect } from "react";
import axios from "axios";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const response = await axios.get("http://localhost:3000/todos");

    // console.log(response.data);

    setTodos(response.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/todos/${id}`);
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(todos);


  return (
    <div className="w-full flex justify-center">
      <table className="flex flex-col justify-center">
        <thead>
          <tr className="max-w-[900px] w-full grid place-items-start grid-cols-3 gap-x-60 border-b py-1">
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr
              className="max-w-[900px] w-full grid place-items-start grid-cols-3 gap-x-60 border-b py-1"
              key={todo.todo_id}
            >
              <td>{todo.description}</td>
              <td>
                <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-200 px-3 py-1 text-white rounded-md">
                  <EditTodo todo={todo}/>
                </button>
              </td>
              <td>
                <button
                  className="bg-red-500 hover:bg-red-600 transition-all duration-200 px-3 py-1 text-white rounded-md"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;
