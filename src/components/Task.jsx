import "./Task.css";
import "./AddNewTask.css";
import TaskButtons from "./TaskButtons";

export default function Task(props) {


  return (
    <div className="new-task">
      <h3>{props.description}</h3>
      <div className="task-buttons">
        <TaskButtons />
      </div>
    </div>
  );
}
