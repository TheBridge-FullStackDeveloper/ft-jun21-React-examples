import React, { useState }  from "react";
import Button from '../Button';

const Rating = () => {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }

  return (
    <div>
      <h1>Introduzca su valoracion</h1>
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <h2>Valoracion:<span>{count}</span></h2>
    </div>
  )
};

export default Rating;
