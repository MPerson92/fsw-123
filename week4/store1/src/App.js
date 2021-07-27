import React from 'react'
import listOfTodos from './TodoStore';
import TodoCard from './TodoCard';


class App extends React.Component {
  constructor() {
    super();
      this.state = {
      arrTodos: listOfTodos.map((item, index) => 
        ({key: index, id: item.id, text: item.text, isCompleted: item.isCompleted})
      )
    
    }
  }

  completeTodo = (e) => {
    if (e) {
      let arrUpdatedTodos = [...this.state.arrTodos]
      let index = arrUpdatedTodos.findIndex( item => item.id === e);
      let updatedTodo = {...arrUpdatedTodos[index]}
        if (updatedTodo.isCompleted) {
           updatedTodo.isCompleted = false
        } else {
          updatedTodo.isCompleted = true
        }
        arrUpdatedTodos[index] = updatedTodo
        this.setState({
        arrTodos: arrUpdatedTodos
      })
    }
  }
    
    deleteTodo = (e) => {
      if (e) {
        let arrDeleteTodos = [...this.state.arrTodos]
        let index = arrDeleteTodos.findIndex(item => item.id === e);
        arrDeleteTodos.splice(index, 1)
        this.setState({
          arrTodos: arrDeleteTodos
        })
      }
    }

    addTodo = (e) => {
      if(e) {
        let arrAddTodos = [...this.state.arrTodos]
        arrAddTodos.push(e.value)
        this.setState({
          arrTodos: arrAddTodos
        })

      }
    }


    render() {
      const todoItems = this.state.arrTodos.map((item, index) => {
        return (
          <TodoCard
              key = {item.key}
              id = {item.id}
              text = {item.text}
              isCompleted = {item.isCompleted}
              completeTodo = {this.completeTodo}
              deleteTodo = {this.deleteTodo}
              addTodo = {this.addTodo}
          />
        )
      })
        return (
            <div>
                <div className="todo">My To Do List</div>
                {todoItems}
            </div>
        )
    }
}

export default App;
