import React, { useState } from "react";
import Modal from "./Modal";

const EditTodo = ({ todo, refreshTodos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    refreshTodos();
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 transition-all duration-200 px-3 py-1 text-white rounded-md"
      >
        Edit
      </button>
      <Modal
        todo={todo}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default EditTodo;
