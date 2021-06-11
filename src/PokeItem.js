import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <img src={this.props.url} alt={this.props.name}/>
                <h3>{this.props.name}</h3>
                <p>Attack: {this.props.attack}</p>
                <p>Defense: {this.props.defense}</p>
            </div>
        )
    }
}
