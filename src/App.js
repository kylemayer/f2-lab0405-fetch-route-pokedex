import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import Header from './Header.js';
import PokeIndex from './PokeIndex.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import PokemonDetails from './PokemonDetails.js';

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/pokemon/:pokeId" component={PokemonDetails} />
          <Route path="/pokemon" component={PokeIndex}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;