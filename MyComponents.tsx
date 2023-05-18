import React from 'react'

class MyComponents extends React.Component {

    state = {
        name: 'Loi the Boy',
        address: 'Hoi Dan IT',
        age: 26
    }

    handleClick() {
        console.log('>>> Click me button!')
        console.log(`I am ${this.state.name}`)


        this.setState({
            name: 'Loi',
            age: Math.floor(Math.random()*100 + 1)
        })
        // console.log(event.target)
    }

    handleMouseOver(event) {
        // console.log(event)
    }

    render() {
        return (
            <div>
                I'm {this.state.name} and I'm from {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <button onMouseOver={this.handleMouseOver}>Hover me</button>

            </div>
        )
    }
}

export default MyComponents
