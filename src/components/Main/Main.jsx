
import React from 'react'
import {Route, Switch} from 'react-router-dom';
import ProductList from "../ProductList";
import About from "../About";
import Contact from "../Contact";
import Staff from "../Staff";
import Error from "../Error/Error";
import Login from "../Login";
import Donation from "../Donation";
import Feed from "../Feed";


function Main() {
  return (
    <main>
      <Switch>
          <Route path="/" component={ProductList} exact/>
          <Route path="/about" component={About} />
          <Route path="/staff" component={Staff} />
          <Route path="/contact" component={Contact} />
          <Route path="/donation" component={Donation} />
          <Route path="/feed" component={Feed} />
          <Route path="/login" component={Login} />
          <Route component={Error} />
      </Switch>
    </main>
  )
}

export default Main
