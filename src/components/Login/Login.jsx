import React, { Component } from "react";
import {userContext} from '../../context/userContext';

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = { 
    }
    this.name = React.createRef();
  }
  

handleChange = (event) => {
  console.log(event.target.value);
}

handleSubmit = (event) =>{
  event.preventDefault();
  console.log("Enviado:"+this.name.current.value);


}
  render() {
    return <div>

              <h1>Introduce usuario</h1>
              <form onSubmit={this.handleSubmit} className="product-list-form">
                  
                  <label>
                  Nombre:
                  </label>
                  
                  <input type="text" onChange={this.handleChange} ref={this.name}/>
                  
                  <userContext.Consumer>
                    {({user,login}) => 
                      <input type="submit" value="Enviar" onClick={()=>login(this.name.current.value)}/>
                    }
                  </userContext.Consumer>

              </form>
            </div>;
  }
}

export default Login;
