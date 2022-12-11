import { useEffect, useState } from 'react';
import './App.css';
import AddNewTask from './components/AddNewTask';
import Task from './components/Task';
import Title from './components/Title';
import Header from './layout/Header';

function App() {
  function showTasks (tasks) {
    return tasks.map(task => {
      <Task description={task} />
      console.log("teste");
    })
  } 

  let tasks = []

  return (
    <div className="App">
      <Header title="TodoApp"/>
      <Title title="Tarefas" subtitle="Cadastro"/>
      <AddNewTask listaDeTarefas={tasks}/>
      {tasks.length > 0 ? showTasks(tasks) : false}
      <Task description="Tarefa teste" />
      <Task description="Tarefa teste" />
    </div>
  );
}

export default App;
