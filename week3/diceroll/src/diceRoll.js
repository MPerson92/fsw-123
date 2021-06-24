import React, { Component } from 'react';
import Dice from './dice';


export class DiceRoll extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 1, count1: 1
        };
    }
    render() {
        return (
            <div className="flex">
                <Dice box = {this.state.count}/>
                <Dice box = {this.state.count1}/>
                <button className="button" onClick={() => this.setState({count: Math.floor(Math.random() * 6) + 1, count1: Math.floor(Math.random() * 6) + 1 })}>
                    Click me
                </button>
            </div>
        )
    }
}

export default DiceRoll
