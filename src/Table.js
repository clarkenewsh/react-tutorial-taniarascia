import React, {Component} from 'react'

// simple component
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

// simple component
const TableBody = (props) => {
    const rows = props.characterData.map((rows, index) => {
        return (
            <tr key={index}>
                <td>{rows.name}</td>
                <td>{rows.job}</td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>

}

// class component
class Table extends Component {
    render(){
        const {characterData} = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        )
    }
}

export default Table