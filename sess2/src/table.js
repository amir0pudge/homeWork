import React, { Component } from 'react'
import axios from "axios"


export default class table extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios('https://jsonplaceholder.ir/users').then(({ data: users }) =>
            this.setState({ users })
        )
    }



    render() {
        return (
            <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "800px", height: "400px" }}>
                    <table style={{ width: "800px", height: "400px", border: "1px solid black" }}>
                        <tbody>
                            {this.state.users.map(user => (
                                <tr style={{}} key={user.id}>
                                    <Column user={user} />
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


class Column extends Component {
    render() {
        const { user } = this.props

        this.state = {
            name: [user.name],
            address: [user.address.city, user.address.street, user.address.alley],
            email: [user.email],
            phone: [user.phone]
        }
        
        return (
            <>

                <td title={user} style={{ border: "1px solid black" }}>{this.state.name}</td >
                <td title={user} style={{ border: "1px solid black" }}>{this.state.address}</td >
                <td title={user} style={{ border: "1px solid black" }}>{this.state.email}</td >
                <td title={user} style={{ border: "1px solid black" }}>{this.state.phone}</td >
            </>

        )
    }
}