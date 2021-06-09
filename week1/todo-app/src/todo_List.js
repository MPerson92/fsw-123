import React from "react";

class todoList extends React.Component {
    render(){
        return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <ul>
                <li> <input type="checkbox"></input> Wash Clothes</li>
                <li> <input type="checkbox"></input> Shop for Shoes</li>
                <li> <input type="checkbox"></input> Walk a Mile</li>
                <li> <input type="checkbox"></input> Cleaning the house</li>
            </ul>
            
        </div>
        );
    }
}

export default todoList