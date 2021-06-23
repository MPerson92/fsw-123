import React, { Component } from 'react'

export class Card extends Component {
    constructor(props){
       super(props) 
    }
    render() {
        return (
            <div className="card"  style={{backgroundColor:this.props.bgColor, width:this.props.width, height:this.props.height}} >
                <h1>Cards</h1>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
                <hr style={{width: "297px"}}/>
                <h3>{this.props.info}</h3>
                
            </div>
        )
    }
}

export default Card
