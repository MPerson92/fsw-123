import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid";




export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.completeTodo = this.completeTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.state = {text: this.props.data};
        this.myRef = React.createRef();
    }

    completeTodo (id) {
        this.filtered = this.state.text.filter((element) => {
            if(element.id == id) {
                element.isCompleted = !element.isCompleted;
            }

            return false;
        });
    }
    
    deleteTodo (id){
        this.filtered = this.state.text.filter(text => text.id != id)
        this.setState({text: this.filtered})
    }


    addTodo(text){
        this.setState({text: this.state.text.concat({id: uuidv4(), text: text, isCompleted: false})});
    }


    render() {
        return (
            
            <div>
                <label>
                Name:
                    <input type="text" ref={this.myRef} />
                </label>
                <input type="submit" value="submit" onClick={() => {this.addTodo(this.myRef.current.value)}} />
         
                {this.state.text.map((element, index) => {
                    return ( <div> 
                    <li key={index}> <input type="checkbox"  onChange={(event) => {this.completeTodo(element.id); event.target.checked = element.isCompleted;}}/> 
                    <button onClick={() => {this.deleteTodo(element.id)}}>x</button> 
                    {element.text}</li> 
                     </div>)
                })}


            </div>
        )
    }
}

export default TodoList;