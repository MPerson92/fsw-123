import React from 'react'

export class TodoCard extends React.Component {
    constructor(props){
        super(props)
    }

    completeTodo(){
        this.props.completeTodo(this.props.completeTodo(this.props.id));
    }

    deleteTodo(){
        this.props.deleteTodo(this.props.deleteTodo(this.props.id))
    }

    addTodo(){
        this.props.addTodo(this.props.addTodo(this.props.id))
    }

    render() {
        let completeStyle = {textDecorationLine: 'none'}
        if (this.props.isCompleted){
            completeStyle = { textDecorationLine: 'line-through'}
        }   
        return (
            <div className="divto">
                <div>
                    <input
                        type='checkbox'
                        className='chk2'
                        id={this.props.id}
                        onClick={() => {this.completeTodo()}}
                        checked={this.props.isCompleted}
                    />    
                </div>
                <div>
                    <label style={completeStyle} for={this.props.id}> {this.props.text} </label>
                </div>

                <div>
                    <button className='btn1' onClick={() => {this.deleteTodo()}}>x</button>
                </div>
                
            </div>
        )
    }
}

export default TodoCard
