/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/





//slide 34
/*import React from 'react';

function Greeting() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default Greeting;*/





//slide 34 pt2
/*import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Elizabeth" />
    </div>
  );
}

export default App;*/





//slide 44
/*import React from 'react';
import Greeting from './Greeting';

function App() {
  const name = 'Elizabeth';

  return (
    <div>
      <Greeting name={name} />
    </div>
  );
}

export default App;*/




//slide 66
/*import React from 'react';
import Emoji from './Emoji';

function App() {
  return (
    <div>
      <h1>
        <Emoji label="Smiling Face" symbol="😊" />
        <Emoji label="Heart" symbol="❤️" />
        <Emoji label="Thumbs Up" symbol="👍" />
      </h1>
    </div>
  );
}

export default App;*/





//slide 66pt2
/*import React, { useState } from 'react';

function Emoji() {
  const [isBrokenHeart, setIsBrokenHeart] = useState(false);

  const handleToggleHeart = () => {
    setIsBrokenHeart((prevIsBrokenHeart) => !prevIsBrokenHeart);
  };

  return (
    <div>
      <span role="img" aria-label="Heart">
        {isBrokenHeart ? '💔' : '❤️'}
      </span>
      <button onClick={handleToggleHeart}>
        {isBrokenHeart ? 'Fix Heart' : 'Break Heart'}
      </button>
    </div>
  );
}

export default Emoji;*/





//slide 85
import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const handleCalculate = () => {
    let calculatedResult;
    switch (operator) {
      case '+':
        calculatedResult = Number(num1) + Number(num2);
        break;
      case '-':
        calculatedResult = Number(num1) - Number(num2);
        break;
      case '*':
        calculatedResult = Number(num1) * Number(num2);
        break;
      case '/':
        calculatedResult = Number(num1) / Number(num2);
        break;
      default:
        calculatedResult = '';
    }
    setResult(calculatedResult);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="">Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default Calculator;


