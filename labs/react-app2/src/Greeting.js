//module 7 slide 18
import React, { useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('Hello World');

  const updateGreeting = () => {
    setGreeting('Hello <your name>');
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={updateGreeting}>Click Me</button>
    </div>
  );
};

export default Greeting;
