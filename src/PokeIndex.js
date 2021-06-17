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

    const URL = new URLSearchParams({
        sort: 'pokemonData',
        direction: this.state.direction,
        page: this.state.page,
        type_1: this.state.type,
    })

    if (this.state.query) {
        URL.set('pokemonData', this.state.query);
    }

    const {
        body: { results: data }
    }   = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${URL.toString()}`)

        await sleep(1500);
        this.setState({loading : false});
        this.setState({pokemonData: data})
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
            {this.state.page - 1 > 0 && (
                <button onClick={this.prevPage}>
                    Prev Page ({this.state.page - 1})
                </button>
            )}
            <button onClick={this.nextPage}>
                Next Page ({this.state.page + 1})
            </button>
        </div>
        )
    }
}