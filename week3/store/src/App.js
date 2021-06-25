import React, { useState, useRef, useEffect } from 'react';
import Store from './Store';
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const[todos, setTodos] = useState([])
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function pickTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.isComplete = !todo.isComplete
    setTodos(newTodos)
  }

  function createTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, isComplete: false}]
    })
    todoNameRef.current.value = null
  }

  function deleteTodo() {
    const newTodos = todos.filter(todo => !todo.isComplete)
    setTodos(newTodos)
  }

  return (
    <>
      <Store todos={todos} pickTodo = {pickTodo}/>
      <input className="box" ref={todoNameRef} type="text" />
      <button className="l" onClick={createTodo}>Create Todo</button>
      <button className="b" onClick={deleteTodo}>Delete Todo</button>
    </>
  );
}

export default App;

