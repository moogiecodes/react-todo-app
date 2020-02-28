import React from "react";
import EditTaskForm from "./EditTaskForm";

function TodoBox({ text, removeTask, id, editTask }) {
  // 
  const handleSubmit = (evt) => {
    evt.preventDefault();
    removeTask(evt.target.parentNode.id);
  }

  // method to render edit task form 
  const handleEdit = evt => {
    console.log("IN EDIT TASK BUTTON");
    evt.preventDefault();
    editTask(evt.target.parentNode.id);
  }

  return (
    <div id={id}>
      {text}
      <button onClick={handleSubmit}>X</button>
      <button onClick={handleEdit}>Edit Task</button>
    </div>
  );
}

export default TodoBox;