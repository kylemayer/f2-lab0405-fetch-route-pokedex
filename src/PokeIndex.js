import { Component } from 'react'
import request from 'superagent'
import PokeList from './PokeList.js'
import DropdownType from './DropdownType.js'
import DropdownDir from './DropdownDir.js'
import Spinner from './Spinner.js'

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class PokeIndex extends Component {
state = {
    pokemonData: [],
    loading: false,
    query: '',
    type: '',
    direction: '',
    page: 1,
}

componentDidMount = async () => {
    await this.fetch();
}

handleSearch = (e) => {
    this.setState({query: e.target.value})
}

handleTypeChange =  (e) => {
    this.setState({type: e.target.value})
}

handleDirectionChange = (e) => {
    this.setState({direction: e.target.value})
}

nextPage = async (e) => {
    await this.setState({page: this.state.page +1})
    this.fetch()
}

prevPage = async (e) => {
    await this.setState({page: this.state.page -1})
    this.fetch()
}

handleClick = async () => {
    await this.fetch()
}

fetch = async () => {
    this.setState({loading : true})

    const URL = (this.state.query || this.state.type || this.state.direction || this.state.page)
    ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&type_1=${this.state.type}&direction=${this.state.direction}`
    : `https://pokedex-alchemy.herokuapp.com/api/pokedex`;

        const data = await request.get(URL)
        await sleep(1500);
        this.setState({loading : false});
        this.setState({pokemonData: data.body.results})
}

render() {
    return (
        <div className="App">
            <label className="user-input">Search for Pokemon
                <input placeholder="search name" onChange={this.handleSearch}/>
            </label>
            <DropdownType handleType={this.handleTypeChange}/>
            <DropdownDir handleDirection={this.handleDirectionChange}/>
            <button onClick={this.handleClick}>SEARCH 🔍</button>
            {this.state.page - 1 > 0 && (
                    <button onClick={this.prevPage}>
                        Prev Page ({this.state.page - 1})
                    </button>
                )}
                <button onClick={this.nextPage}>
                    Next Page ({this.state.page + 1})
                </button>
            {this.state.loading
                ? <Spinner />
                : <PokeList pokeData={this.state.pokemonData}/>}
        </div>
        )
    }
}