import React, { Component } from 'react'

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event){
        alert('You have submitted you information thanks: ' + this.state.value)
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:<input type="text" value={this.state.value} onChange={this.handleChange}/>
                        Email Message:<input type="text" value={this.state.value} onChange={this.handleChange}/>   
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Contact