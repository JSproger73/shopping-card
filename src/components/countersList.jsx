import React, { useState } from 'react';
import Counter from './counter';

const CounterList = () => {
  const initialState = [
    { id: 1, value: 0, name: 'Ненужная вещь' },
    { id: 2, value: 4, name: 'Ложка' },
    { id: 3, value: 0, name: 'Вилка' },
    { id: 4, value: 0, name: 'Тарелка' },
    { id: 5, value: 0, name: 'Набор минималиста' },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
    console.log('handleReset');
  };

  const handleIncrement = (id) => {
    const index = counters.findIndex((ind) => ind.id === id);
    const newCounter = [...counters];
    newCounter[index].value++;
    setCounters(newCounter);
  };

  const handleDecrement = (id) => {
    const index = counters.findIndex((ind) => ind.id === id);
    const newCounter = [...counters];
    newCounter[index].value--;
    setCounters(newCounter);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CounterList;
