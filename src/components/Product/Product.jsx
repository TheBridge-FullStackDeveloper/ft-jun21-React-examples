import React, { Component } from 'react'
import './Product.css'

export class Product extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             empresa: this.props.info.empresa || "Vendehumo S.A" 
        }
    }
    
    render() {
        const {name,desc,price,url} = this.props.info
        const empresa = this.state.empresa
        return (
            <section>
                <h3>Producto - {name}</h3>
                <p>{desc}</p>
                <p>Empresa: {empresa} </p>
                <p>Precio:{price}</p>
                <img src={url} alt={name}/>
                <br/>
                <button onClick={this.props.remove}>Borrar</button>
            </section>
        )
    }
}

export default Product
