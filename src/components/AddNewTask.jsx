import "./AddNewTask.css";
import { useState } from "react";

export default function NewTask(props) {
  const [input, setInput] = useState("");

  return (
    <div className="add-task-container">
      <input
        type="text"
        className="task-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="btn-container">
        <button className="btn btn-add">+</button>
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
