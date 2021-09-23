import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import ProductList from "../ProductList";
import About from "../About";
import Contact from "../Contact";
import Staff from "../Staff";
import Error from "../Error/Error";

class Main extends Component {
  
  render() {
    return (
      <main>
            <Switch>
                <Route path="/" component={ProductList} exact/>
                <Route path="/about" component={About} />
                <Route path="/staff" component={Staff} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
      </main>
  )
  }
}

export default Main;
