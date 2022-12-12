import "./AddNewTask.css";
import { useState } from "react";

export default function AddNewTask(props) {
  const [input, setInput] = useState("");

  const addNewTask = (description) => {
    if (props.tarefas.tasks.includes(description)) {
      alert("Tarefa já cadastrada")
    } else {
      props.tarefas.setTasks([...props.tarefas.tasks, description]);
    }
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
        <button className="btn btn-add" onClick={() => addNewTask(input)}>
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
