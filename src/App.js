import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
// import Spinner from './Spinner.js';


export default class App extends Component {
  state = {
    pokemonData: [],
    loading: false,
    query: '',

  }

  componentDidMount = async () => {
    await this.fetch();
}

  fetch = async () => {

    const URL = (this.state.query)
      ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`
      : `https://pokedex-alchemy.herokuapp.com/api/pokedex`;

        const data = await request.get(URL)
        this.setState({pokemonData: data.body.results});
  }


  render() {
    return(
    <div className="App">
      <Header />
      <PokeList pokeData={this.state.pokemonData}/>
    </div>
    )
  }
}
