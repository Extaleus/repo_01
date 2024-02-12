import React, { useState, useEffect } from "react";

function Clock() {
  // Initialize the current time to the current date and time
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Extract the hours, minutes, and seconds from the current time
  let hours = time.getHours();
  const minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Format the time as a string
  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <div>
      {/* Display the time string */}
      {timeString}
    </div>
  );
}

export default Clock;
