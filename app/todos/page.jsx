"use client";
import React, { useState } from "react";

function Todos() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>간단한 할 일 목록</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="새로운 할 일을 입력하세요"
        data-testid="new-task-input"
      />
      <button onClick={addTask} data-testid="add-task-button">
        추가
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} data-testid={`task-${index}`}>
            {task}
            <button
              onClick={() => removeTask(index)}
              data-testid={`remove-task-${index}`}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
