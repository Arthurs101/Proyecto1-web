import React , { useState, useEffect }from 'react';
export default function Counter({value, duration}){
    const [currentValue, setCurrentValue] = useState(0);
  const increment = Math.ceil(value / (duration / 10)); // El 10 representa el número de intervalos por segundo
  const interval = duration / (value / increment);

  useEffect(() => {
    let timer = null;
    if (currentValue < value) {
      timer = setInterval(() => {
        setCurrentValue((prevValue) => prevValue + increment);
      }, interval);
    }

    return () => clearInterval(timer);
  }, [currentValue, increment, interval, value]);

  return <h1>{currentValue}</h1>;
}