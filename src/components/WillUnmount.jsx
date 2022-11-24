import React, { Component } from 'react'
import '../styles/WillUnmount.css'

export class WillUnmount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className='tarea-container'>
                <h1>
                    Cuenta: {this.state.count}
                </h1>
                <h2>
                    <span>Tarea 8: </span>
                    Aplicación práctica de componentWillUnmount
                </h2>
                <small>
                    La cuenta aumenta en una unidad cada segundo,
                    y seguirá aumentando a no ser que cuando se desmonte el componente se limpie el intervalo.
                    Esto se logra llamando al método clearInterval dentro del método <b>componentWillUnmount </b> .
                </small>
            </div>
        )
    }
}

export default WillUnmount