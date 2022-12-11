import "./Task.css";
import "./AddNewTask.css";

/* function checkDone() {
  const buttons = document.querySelector(".task-buttons");
  buttons.appendChild(
    <>
      <button className="btn btn-delete">
        <img src="./delete-icon.png" alt="delete icon" />
      </button>
      <button className="btn btn-reload" onClick={() => console.log("teste")}>
        <img src="./reload-icon.png" alt="reload icon" />
      </button>
    </>
  );
} */

export default function Task(props) {
  return (
    <div className="new-task">
      <h3>{props.description}</h3>
      <div className="task-buttons">
        <button className="btn btn-check" >
          <img src="./check-icon.png" alt="check icon" />
        </button>
      </div>
    </div>
  );
}
