import "./AddNewTask.css";
import { useState } from "react";

export default function AddNewTask({ taskHandler }) {
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);

  const createTaskObj = (task) => {
    const taskObj = {
      task,
      id,
    };
    setId(id + 1);
    taskHandler(taskObj);
    setInput("")
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        className="task-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="btn-container">
        <button className="btn btn-add" onClick={() => createTaskObj(input)}>
          +
        </button>
        <button className="btn btn-search">
          <img src="./search-icon.png" alt="search icon" />
        </button>
        <button className="btn btn-clear" onClick={() => setInput("")}>
          x
        </button>
      </div>
    </div>
  );
}
