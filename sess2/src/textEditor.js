import React, { Component } from 'react'

export default class textEditor extends Component {

    state = {
        firstValue: "hi how can i help you ?"
    }

    edit = () => {
        document.getElementsByClassName('showtext')[0].style.display = "none"
        document.getElementsByClassName('edittext')[0].style.display = "flex"
        document.getElementsByClassName('editBtn')[0].style.display = "none"
        document.getElementsByClassName('submitBtn')[0].style.display = "flex"
        document.getElementsByClassName('edittext')[0].value = this.state.firstValue
    }

    submit = () => {
        document.getElementsByClassName('showtext')[0].style.display = "flex"
        document.getElementsByClassName('edittext')[0].style.display = "none"
        document.getElementsByClassName('editBtn')[0].style.display = "flex"
        document.getElementsByClassName('submitBtn')[0].style.display = "none"
        let finalText = document.getElementsByClassName('edittext')[0].value
        this.setState({ firstValue: finalText })
    }

    render() {
        return (
            <div>
                <span className='showtext'>{this.state.firstValue}</span>
                <input className='edittext' style={{ display: "none" }} />
                <button className='editBtn' onClick={this.edit} style={{ margin: "5px" }}>edit</button>
                <button className='submitBtn' onClick={this.submit} style={{ margin: "5px", display: "none" }}>submit</button>
            </div>
        )
    }
}
