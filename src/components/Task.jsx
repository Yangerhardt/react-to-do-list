import "./Task.css";
import "./AddNewTask.css";
import TaskButtons from "./TaskButtons";

export default function Task({description, id, deleteTask}) {
  return (
    <div className="new-task">
      <h3>{description}</h3>
      <div className="task-buttons">
        <TaskButtons  id={id} deleteTask={deleteTask}/>
      </div>
    </div>
  );
}
