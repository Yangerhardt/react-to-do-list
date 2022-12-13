import { useState } from "react";
import AddNewTask from "../components/AddNewTask";
import Task from "../components/Task";
import Title from "../components/Title";
import Header from "../layout/Header";

// Deixei a função de renderTasks somente para lembrar que são necessários 2 returns
/* function renderTasks(allTasks) {
  return allTasks.map((task) => {
    return (
      <>
        <Task description={task} />
      </>
    );
  });
} */

export default function Home(props) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (tasks.includes(task)) {
      alert("Tarefa já cadastrada");
    } else {
      setTasks([...tasks, task]);
    }
  };

  const deleteTask = (id) => {
    const filter = tasks.filter(task => task.id !== id)
    console.log(filter);
    setTasks(filter)
  };

  return (
    <div className="App">
      <Header title="TodoApp" />
      <Title title="Tarefas" subtitle="Cadastro" />
      <AddNewTask taskHandler={addTask} />
      {tasks.map((task) => (
        <Task
          description={task.task}
          key={task.id}
          id={task.id}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
