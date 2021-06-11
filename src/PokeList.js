import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
export default class PokeList extends Component {
    render() {
        return (
            <div>
                {this.props.pokeData.map(poke => <PokeItem
                name={poke.pokemon}
                url={poke.url_image}
                attack={poke.attack}
                defense={poke.defense}
                />)}
            </div>
        )
    }
}
