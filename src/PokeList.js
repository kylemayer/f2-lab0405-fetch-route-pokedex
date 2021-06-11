import React, { Component } from 'react';
import PokeItem from 'PokeItem.js';
export default class PokeList extends Component {
    render() {
        return (
            <div>
                {this.props.pokemonData.map((pokemon, i) => <PokeItem pokeData={pokemon} key={i}/>)}
            </div>
        )
    }
}
