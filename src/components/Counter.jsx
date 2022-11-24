import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={() => {
                    this.setState(previousValue => ({
                        count: previousValue.count - 1,
                    }));
                }}>
                    -
                </button>
                <button onClick={() => {
                    this.setState(previousValue => ({
                        count: 0,
                    }));
                }}>
                    0
                </button>
                <button onClick={() => {
                    this.setState(previousValue => ({
                        count: previousValue.count + 1,
                    }));
                }}>
                    +
                </button>
                {/* <button onClick={() => this.setState({ count: 0 })}>
                    0
                </button>
                <button onClick={() => this.setState({ count: this.state.count++ })}>
                    +
                </button> */}
            </div >

        )
    }
}