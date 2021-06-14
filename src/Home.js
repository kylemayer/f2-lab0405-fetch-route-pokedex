import { Component } from 'react'
import index_pokedex from './index_pokedex.gif'


export default class Home extends Component {
    render() {
        return (
            <div>
                <main>
                    <img className="index-image" src={index_pokedex} alt="pokedex"/>

                </main>
            </div>
        )
    }
}

