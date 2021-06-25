import React from 'react'
import Todo from './Todo'

export default function Store({ todos, pickTodo }) {
    return (
       todos.map(todo => {
           return <Todo key={todo.id} pickTodo = {pickTodo} 
           todo = {todo}  />
       })
    )
}



