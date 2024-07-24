import { useState } from "react";

export default function MainContent() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks((previousTasks) => [...previousTasks, inputValue]);
    setInputValue("");
  }

  function deleteTask(index) {
    setTasks((previousTasks) => previousTasks.filter((_, i) => i !== index));
  }

  function editTask(index) {
    const newTask = prompt("Enter the new task text:", tasks[index]);
    if (newTask) {
      setTasks((previousTasks) =>
        previousTasks.map((task, i) => (i === index ? newTask : task))
      );
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
