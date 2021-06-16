import React, { Component } from 'react'

export class TodoList extends Component {
    constructor(props) {
        super(props);
        
        console.log(this.props.data);
    }

    render() {
        return (
            <div>

                {this.props.data.map(function(element, index){
                    return <li key={index}><input type="checkbox" /> {element.text}</li>
                })}
            </div>
        )
    }
}

export default TodoList;
