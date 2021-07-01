import React, { Component } from 'react'


export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.completeTodo = this.completeTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.state = {text: this.props.data};
    }

    completeTodo (id){
        this.filtered = this.state.text.filter(text => text.id != "click")
        this.setState({text: this.filtered})
    }
    
    deleteTodo (id){
        this.filtered = this.state.text.filter(text => text.id != id)
        this.setState({text: this.filtered})
    }


    render() {
        return (
            <div>
                {this.state.text.map((element, index) => {
                    return <div> <li key={index}> <input type="checkbox" onChange={() => {this.completeTodo(element.id)}}/> 
                    <button onClick={() => {this.deleteTodo(element.id)}}>x</button> 
                    {element.text}</li> 
                     </div>
                })}


            </div>
        )
    }
}

export default TodoList;