import { useState } from "react";

export default function TaskButtons(props) {
  const [done, setDone] = useState(false);

  if (!done) {
    return (
      <button
        className="btn btn-check"
        onClick={() => setDone(true)}
      >
        <img src="./check-icon.png" alt="check icon" />
      </button>
    );
  } else {
    return (
      <>
        <button className="btn btn-delete">
          <img src="./delete-icon.png" alt="delete icon" />
        </button>
        <button className="btn btn-reload" onClick={() => setDone(false)}>
          <img src="./reload-icon.png" alt="reload icon" />
        </button>
      </>
    );
  }
}
