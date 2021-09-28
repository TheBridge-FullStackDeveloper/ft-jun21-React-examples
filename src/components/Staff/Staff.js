import React, { Component } from "react";
import axios from 'axios';

import PokemonsApi from "../PokemonsApi";


class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = { pokeLista: [] }
    // Event binding (Bindear eventos)
    console.log('CONSTRUCTOR')
}

async componentDidMount(){
        //Petición HTTP      
          await new Promise(resolve => setTimeout(resolve, 2000)); // simular retardo
          const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
          const data = await resp.data;
          this.setState({
              pokeLista: data.results
          })
          console.log('componentDidMount');
    }

  componentDidUpdate(prevProps, prevState){
      console.log('prevProps: ', prevProps, 'prevState: ', prevState)
      console.log(`Estado antes:${prevState.pokeLista.length} , Estado actual:${this.state.pokeLista.length}`)
      console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  handlerLoadPokemons = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.json();
    this.setState({
        pokeLista: data.results
    })
}

  handlerResetPokemons = () => {
      this.setState({
          pokeLista: []
      })
  }

  handlerUpdate = () => {
    this.forceUpdate()
}
render() {
    console.log('RENDER')
    return (
      <>
        <PokemonsApi lista={this.state.pokeLista}></PokemonsApi>
        <button onClick={this.handlerLoadPokemons}>Load Pokemons</button>
        <button onClick={this.handlerResetPokemons}>Reset Pokemons</button>
        <button onClick={this.handlerUpdate}>Force Update</button>
      </>
        
        
    );
}










}

export default Staff;
