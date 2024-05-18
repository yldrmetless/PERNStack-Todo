import axios from "axios";
import React, { useState } from "react";

const Modal = ({ isOpen, onClose, todo }) => {
  if (!isOpen) return null;

  const [description, setDescription] = useState(todo.description);


  const editText = async(id) => {
    try{
        const body = {description}
        const res = await axios.put(`http://localhost:3000/todos/${id}`, body)

        console.log(res);
    }
    catch(err){
        console.log(err.message);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg z-50 w-11/12 md:w-1/3">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Edit</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          <input
            type="text"
            className="border focus:outline-none focus:border-gray-400 px-5 w-full py-2 rounded-md placeholder:text-black text-black"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="p-4 border-t gap-x-8 flex justify-end">
          <button
            onClick={() => editText(todo.todo_id)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
