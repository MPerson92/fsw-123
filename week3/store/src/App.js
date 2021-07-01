import listOfTodos from "./store"
import TodoList from "./todoList";

function App() {
  return (
    <div>
      <TodoList data={listOfTodos}/>
    </div>
  );
}

export default App;

