import React from "react";
import EditTodo from "./EditTodo";
import axios from "axios";

const ListTodos = ({ todos, refreshTodos }) => {

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      refreshTodos();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full flex justify-center mt-8">
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
                <EditTodo todo={todo} refreshTodos={refreshTodos} />
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
