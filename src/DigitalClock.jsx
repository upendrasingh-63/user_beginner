import React, { useState, useEffect } from "react";
import './static/Clock.css'; // Import the CSS file

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[time.getDay()];

    return `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm} ${day}`;
  }

  return (
    <div className="clock-container">
      <h1 className="clock-heading">Current Time</h1>
      <p className="clock-time">{formatTime()}</p>
    </div>
  );
}

export default Clock;
