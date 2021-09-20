import React, { Component } from 'react'
import Product from '../Product'
import products from '../../data.js'

export class ProductList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data:{},
             "products": products // [{p1},{p2},{p3},{p4},{p5}]
        }
    }
    
    addProduct = () => {
        const name = prompt("Introduce nombre")
        const desc = prompt("introduce descripción")

        //const name = "Cocido"
        //const desc = "Disfruta del cocido madrileño"
        this.setState({data:{name,desc}})

        //Añadir producto al array
        const newProduct = {name,desc}
        this.setState({ products: [...this.state.products, newProduct]})

    }
    removeProduct = () => {
        this.setState({data:{}})
        this.setState({products:[]})
    }

    paintProducts = () => {
        // [{p1},{p2},{p3},{p4},{p5}] --> this.state.products
        return this.state.products.map((product,i)=><Product info={product} key={i}/>)
    }
    render() {
        return (
            <>
                <h1>Aquí lista de productos</h1> 
                <article>
                    {this.paintProducts()}
                </article>
                <button onClick={this.addProduct}>Pulsa</button>
                <button onClick={this.removeProduct}>Borrar todo</button>
                <h3>Último producto añadido: {this.state.data.name}</h3>
            </>

        )
    }
}

export default ProductList
