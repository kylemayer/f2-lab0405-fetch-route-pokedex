import { Component } from 'react'
import pokedex from './Pokedex.png'
import {NavLink} from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div className="head-img">
                <img src={pokedex} alt="Pokedex" />
                <div className="links">
                    <NavLink className="nav-links" exact to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-links" to="/pokemon">
                        Pokedex
                    </NavLink>
                </div>
            </div>
        )
    }
}
