import { useState } from "react";
import "./App.css";
import AddNewTask from "./components/AddNewTask";
import Task from "./components/Task";
import Title from "./components/Title";
import Header from "./layout/Header";

function showTasks(allTasks) {
  return allTasks.map((task) => {
    return (
      <>
        <Task description={task} />
      </>
    );
  });
}

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header title="TodoApp" />
      <Title title="Tarefas" subtitle="Cadastro" />
      <AddNewTask tarefas={{ tasks, setTasks }} />
      {tasks.map(task => <Task description={task} key={task} />)}

    </div>
  );
}

export default App;
