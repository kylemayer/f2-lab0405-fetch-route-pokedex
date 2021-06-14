import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import bgImg from './bg.jpg';
import { Link } from 'react-router-dom';
export default class PokeList extends Component {
    render() {
        return (
            <div className="pokemon-info"
            style={{ backgroundImage: `url(${bgImg})`
            }}>
                {this.props.pokeData.map(poke => (
                <Link to={`/pokemon/${poke.id}`}>
                    <PokeItem
                name={poke.pokemon}
                url={poke.url_image}
                type={poke.type_1}
                height={poke.height}
                weight={poke.weight}
                shape={poke.shape}
                ability_hidden={poke.ability_hidden}/>
                </Link>))}
            </div>
        )
    }
}
