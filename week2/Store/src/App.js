import Database from "./store"
import './App.css';
import TodoList from "./todoList";

function App() {
  return (
    <div>
      <TodoList data={Database}/>
    </div>
  );
}

export default App;
