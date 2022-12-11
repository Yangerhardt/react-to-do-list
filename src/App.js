import './App.css';
import NewTask from './components/AddNewTask';
import Task from './components/Task';
import Title from './components/Title';
import Header from './layout/Header';

function App() {
  return (
    <div className="App">
      <Header title="TodoApp"/>
      <Title title="Tarefas" subtitle="Cadastro"/>
      <NewTask />
      <Task description="Tarefa teste" />
      <Task description="Tarefa teste" />
    </div>
  );
}

export default App;
