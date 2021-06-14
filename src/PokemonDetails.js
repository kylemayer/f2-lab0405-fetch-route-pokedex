import { Component } from 'react'
import request from 'superagent'



const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))
export default class PokemonDetails extends Component {
    state={
        pokemonDetail: {},
        loading: false,
    }

    componentDidMount() {
        this.fetchDetail()
    }

    fetchDetail = async () => {
        this.setState({loading: true})

        const apiId = this.props.match.params.pokeId;
        const data = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex/${apiId}`
        )

        await sleep(1500)
        this.setState({loading: false})
        this.setState({pokemonDetail: data.body})
    }


    render() {
        return (

            <div>
                {this.state.loading && <h2>Loading...</h2>}
                <h3>Pokemon Analysis</h3>
                <p>{this.props.match.params.pokeId}</p>
                <p>{this.state.pokemonDetail.pokemon}</p>
            </div>
        )
    }
}
