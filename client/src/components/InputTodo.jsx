import React, { useState } from "react";
import axios from 'axios';

const InputTodo = ({ refreshTodos }) => {
  const [description, setDescription] = useState("");  

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const body = { description };
      await axios.post("http://localhost:3000/todos", body);
      setDescription("");
      refreshTodos();
    } catch(err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form className="mt-8 max-w-[900px] w-full flex items-center gap-x-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          className="py-2 px-5 focus:outline-none focus:border-gray-400 border w-full rounded-md"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit" className="bg-green-500 hover:bg-green-600 transition-all duration-200 px-8 py-2 rounded-md text-white">Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
