import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0); // Tracks the time in seconds
  const intervalRef = useRef(null); // Holds the interval ID

  const start = () => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 10);
    }, 10);
    console.log('Interval started with ID:', intervalRef.current);
  };

  const stop = () => {
    if (intervalRef.current !== null) {
      console.log('Interval stopped with ID:', intervalRef.current);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    stop(); // Stop the interval
    setTime(0); // Reset the time to 0
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.timer}>{formatTime(time)}</h1>
      <div>
        <button onClick={start} style={styles.button}>Start</button>
        <button onClick={stop} style={styles.button}>Stop</button>
        <button onClick={reset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
}

function formatTime(time) {
    const milliseconds = `0${Math.floor((time % 1000)/10)}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
  
    return `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '98vh',
    backgroundColor: '#282c34',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif'
  },
  timer: {
    fontSize: '3em',
    marginBottom: '20px',
    backdropFilter: 'blur(5px)',
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '1.5em',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#282c34',
  }
};

export default Stopwatch;
