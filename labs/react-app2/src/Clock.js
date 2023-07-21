//module 7 slide 18 pt2
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>Current Time:</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;



// module 7 slide 33 pt2
/*import React, { useContext } from 'react';
import { EmojiContext } from './EmojiContext';

const Clock = () => {
  const { emoji } = useContext(EmojiContext);

  const getTime = () => {
    const date = new Date();
    return date.toLocaleTimeString();
  };

  return (
    <div>
      <h2>Current Time:</h2>
      <p>{getTime()}</p>
      <p>{emoji}</p>
    </div>
  );
};

export default Clock; */
