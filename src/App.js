import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import Dropdown from './Dropdown.js';
import Spinner from './Spinner.js';

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))
export default class App extends Component {
  state = {
    pokemonData: [],
    loading: false,
    query: '',
    type: '',
  }

componentDidMount = async () => {
    await this.fetch();
}

handleSearch = (e) => {
  this.setState({ query: e.target.value })
}

handleTypeChange =  (e) => {
  this.setState({
    type: e.target.value
})}

handleClick = async () => {
  await this.fetch();
}

  fetch = async () => {
    this.setState({loading : true});

    const URL = (this.state.query || this.state.type)
      ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&type_1=${this.state.type}`
      : `https://pokedex-alchemy.herokuapp.com/api/pokedex`;

        const data = await request.get(URL)
        await sleep(1500);
        this.setState({loading : false});
        this.setState({pokemonData: data.body.results});
  }

  render() {
    return(
    <div className="App">
      <Header />
      <label className="user-input">Search for Pokemon </label>
      <input onChange={this.handleSearch} />
      <Dropdown handleType={this.handleTypeChange}/>
      <button onClick={this.handleClick}>SEARCH 🔍</button>
      {this.state.loading
        ? <Spinner />
        : <PokeList pokeData={this.state.pokemonData}/>}
    </div>
    );
  }
}
