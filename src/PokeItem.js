import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className="pokemon-card">
                <img src={this.props.url} alt={this.props.name} className="poke-img"/>
                <div className="details">
                <h3>{this.props.name}</h3>
                <p>Type: {this.props.type}</p>
                <p>Height: {this.props.height}</p>
                <p>Weight: {this.props.weight}</p>
                <p>Shape: {this.props.shape}</p>
                <p>Ability: {this.props.ability_hidden}</p>
                </div>

            </div>
        )
    }
}
