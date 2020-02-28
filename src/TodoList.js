import React, { useState } from "react";
import TodoBox from './TodoBox';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
import EditTaskForm from "./EditTaskForm";

function TodoList() {
  // let edit = false;
  const [editedTodo, setEditedTodo] = useState([{ edit: false, id: null }])
  //maps todo boxes
  const [todoBoxes, setTodoBoxes] = useState([{ task: "grocery shopping", id: "default" }]);

  const renderTodoBoxes = () => {
    return todoBoxes.map(box => (
      <TodoBox text={box.task} removeTask={removeTask} key={box.id} id={box.id} editTask={editTask} />
    ))
  }

  // remove task method
  // target by id ?
  const removeTask = (id) => {
    const newTodoList = todoBoxes.filter(todo => todo.id !== id);
    setTodoBoxes(newTodoList);
  }

  // add task
  const addTask = (formData) => {
    const newTodo = {
      ...formData, id: uuid()
    }
    setTodoBoxes(oldTodoBoxes => [...oldTodoBoxes, newTodo]);
  }

  //
  let taskText;
  let currTask;
  const editTask = (id) => {
    setEditedTodo({ edit: true, id: id });

    for (let todo of todoBoxes) {
      if (todoBoxes.id === id) {
        currTask = todo;
        taskText = todo.text;
      }
    }
  }

  //update from editTaskForm 
  const updateTask = (formData) => {
    setEditedTodo({ edit: false });
    const updateTodo = {
      ...formData
    }
    updateTodo.id = editedTodo.id;

    const newTodoList = todoBoxes.filter(todo => todo.id !== editedTodo.id);
    setTodoBoxes([...newTodoList, updateTodo])
  }
  // Full list of todos with form
  return (
    <div>
      {renderTodoBoxes()}
      {editedTodo.edit ? <EditTaskForm text={taskText} addTask={addTask} updateTask={updateTask} /> : ""}
      {!editedTodo.edit ? <NewTodoForm addTask={addTask} /> : ""}
    </div>
  )
}

export default TodoList;