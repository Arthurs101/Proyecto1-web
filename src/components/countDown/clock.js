import React ,{ useState, useEffect } from 'react';
import './clock.scss'
function CountdownClock() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownDate = new Date('2023-12-31T23:59:59');

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const difference = countdownDate - currentDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='CountDown'>
      <p className='prox-partido'>
        {'PRÓXIMO '}
        <span>PARTIDO</span>
      </p>
        <div className="countdown">
      <div className="countdown-number days">
        {days}
      </div>
      <div className="countdown-number hours">
        {hours}
      </div>
      <div className="countdown-number minutes">
        {minutes}
      </div>
      <div className="countdown-number seconds">
        {seconds}
      </div>
    </div>
    </div>

  );
}

export default CountdownClock;
