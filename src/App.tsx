import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import "./App.css";
import Modal from "./component/Modal";

function App() {
  return (
    <main className="App">
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </main>
  );
}

export default App;
