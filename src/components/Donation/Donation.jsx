import React, { useState } from 'react';

const Donation = () => {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState({
    email: '',
    account: ''
  });


  const handleAddClick = () => {
      setCount(count + 1)
  }

  const handleSubClick = () => {
      setCount(count - 1)
  }

  const handleChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(values)
  }

  return (
      <>
          <h1>Dóname una cerveza</h1>
          <h3>Cantidad a donar: {count} €</h3>
          <button name='add' onClick={handleAddClick} >+</button>
          <button name='sub' onClick={handleSubClick} >-</button>

          <h1>Datos de facturación</h1>
          <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <br/>
                <input name="email" type="text" onChange={handleChange}></input>
                <br/>
                <label htmlFor="account">Cuenta bancaria</label>
                <br/>
                <input name="account" type="number" onChange={handleChange}></input>
                <br/>
                <button>Pagar</button>
            </form>
            <p>{values.email} va a donar: {count}€</p>
      </>
  );





}

export default Donation


