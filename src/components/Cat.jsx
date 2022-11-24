// import React, { Component } from 'react'

// export default class Cat extends Component {
//   render() {
//     return (
//       <div>Cat</div>
//     )
//   }
// }

import React from 'react';

class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sleeping: true };
    }
    render() {
        return (
            <div>
                <p>{`The cat is ${this.state.sleeping ? 'sleeping' : 'eating'}`}</p>
                <button onClick={() => this.setState({ sleeping: !this.state.sleeping })}>
                    Toogle sleeping
                </button>
            </div>
        );
    }
}

export default Cat;
