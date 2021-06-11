import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <img src={this.props.pokeData.url_image} alt={this.props.pokeData.pokemon}/>
                <h3>{this.props.pokeData.pokemon}</h3>
                <p>Attack: {this.props.pokeData.attack}</p>
                <p>Defense: {this.props.pokeData.defense}</p>
            </div>
        )
    }
}
