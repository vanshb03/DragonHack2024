import React, { useState, useEffect } from 'react';

function TimeCounter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-gray-500 dark:text-gray-400">
      {seconds} seconds ago
    </div>
  );
}

export default TimeCounter;