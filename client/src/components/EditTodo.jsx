import React, { useState } from "react";
import Modal from "./Modal";

const EditTodo = ({todo}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 transition-all duration-200 px-3 py-1 text-white rounded-md"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <Modal id={`id${todo.todo_id}`} todo={todo} isOpen={isOpen} onClose={closeModal} title="Edit Todo">
        <div>Modal Content Here</div>
      </Modal>
    </div>
  );
};

export default EditTodo;
