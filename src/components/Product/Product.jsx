import React, { Component } from 'react'

export class Product extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             empresa: this.props.info.empresa || "Vendehumo S.A" 
        }
    }
    
    render() {
        const {name,desc} = this.props.info
        const empresa = this.state.empresa
        return (
            <section>
                <h3>Producto - {name}</h3>
                <p>{desc}</p>
                <p>Empresa: {empresa} </p>
            </section>
        )
    }
}

export default Product
