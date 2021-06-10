import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <img src={this.props.pInfo.url_image} alt='a Pokemon' />
                <p>{this.props.pInfo.pokemon}</p>
                <p>{this.props.pInfo.attack}</p>
                <p>{this.props.pInfo.defense}</p>
            </div>
        )
    }
}
