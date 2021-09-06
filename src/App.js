import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [seconds, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60)

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
      
        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
      }, 1000)
    }
    return () => clearInterval(intervalId);
  }, [isActive, counter])

  const stopTimer = () => {
    setIsActive(false);
    setCounter(0);
    setMinute('00');
    setSecond('00');
  }


  return (
    <div className="App">
        <div className="time">
          <span className='minutes'>{minute}</span>
          <span>:</span>
          <span className='seconds'>{seconds}</span>
        </div>
        <div className='settings'>
          <button onClick={() => setIsActive(!isActive)} className='start'>{isActive ? 'Pause' : 'Start'}</button>
          <button onClick={stopTimer} className='reset'>Reset</button>
        </div>
    </div>
  );
}

export default App;
