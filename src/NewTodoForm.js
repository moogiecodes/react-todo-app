import React, { useState } from "react";

function NewTodoForm({ addTask }) {
  const INITIAL_STATE = { task: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  // handles on keystroke from user
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }))
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addTask(formData);
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task: </label>
      <input name="task"
        value={formData.task}
        onChange={handleChange}></input>
      <button>Add Task</button>
    </form>
  );
}

export default NewTodoForm;