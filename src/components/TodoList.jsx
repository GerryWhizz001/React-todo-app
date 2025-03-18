import React, { useState, useEffect } from "react";
import { getTasks, addTask, deleteTask } from "../api";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  const handleAddTask = async () => {
    if (!task.trim()) return;
    await addTask(task);
    setTask("");
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map(({ _id, task }) => (
          <li key={_id}>
            {task}
            <button className="delete-btn" onClick={() => handleDeleteTask(_id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
