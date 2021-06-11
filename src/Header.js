import React, { Component } from 'react'
import pokedex from './Pokedex.png';
export default class Header extends Component {
    render() {
        return (
            <div className="head-img">
                <img src={pokedex} alt="Pokedex" />
            </div>
        )
    }
}
