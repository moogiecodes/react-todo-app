import React, { useState } from "react";

function EditTaskForm({ text, addTask, updateTask }) {
  const INITIAL_STATE = { task: text };
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
    updateTask(formData);
    // setFormData(INITIAL_STATE);
  }

  return (
    <form id="edit" onSubmit={handleSubmit}>
      <label htmlFor="task">Task: </label>
      <input name="task"
        value={text}
        onChange={handleChange}></input>
      <button>Save</button>
    </form>
  );
}

export default EditTaskForm;