import { Component } from 'react'

export default class DropdownDir extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handleDirection}>
                    <option value="">Asc/Desc Order</option>
                    <option value="asc">- Ascending</option>
                    <option value="desc">- Descending</option>
                </select>
            </div>
        )
    }
}
