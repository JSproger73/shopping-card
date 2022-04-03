import React, { useState } from 'react';

const Counter = (props) => {
  const { value } = props;

  const formatValue = () => (value === 0 ? 'empty' : value);

  const getBageClasses = () => {
    let classes = 'badge m-2 ';
    classes += value === 0 ? 'bg-warning' : 'bg-primary';
    return classes;
  };

  // const handleIncrement = () => {
  //   console.log('handleIncrement');
  //   // setValue((prevState) => prevState + 1);value +1
  // };

  // const handleDecrement = () => {
  //   console.log('handleDecrement');
  //   // setValue((prevState) => prevState - 1); value -1
  // };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btm-sm m-2" onClick={() => props.onIncrement(props.id)}>
        +
      </button>
      <button className="btn btn-primary btm-sm m-2" onClick={() => props.onDecrement(props.id)}>
        -
      </button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>
        Удалить
      </button>
    </div>
  );
};

export default Counter;
