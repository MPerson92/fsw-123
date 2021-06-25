import React from 'react'

export default function Todo({todo, pickTodo }) {
    function completeTodo() {
        pickTodo(todo.id)
    }
    return (
        <div>
            <label>
                <input className="check" type="checkbox" checked={todo.isComplete} 
                onChange= {completeTodo}/>
                {todo.name}
            </label>
            
        </div>
    )
}
