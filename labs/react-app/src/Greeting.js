//slide 34 pt2
/*import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}

export default Greeting;*/




//slide 44
import React, { Component } from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalized: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      personalized: !prevState.personalized,
    }));
  };

  render() {
    const { personalized } = this.state;
    const { name } = this.props;

    return (
      <div>
        <h1>
          {personalized ? `Hello ${name}` : 'Hello World'}
        </h1>
        <button onClick={this.handleClick}>
          {personalized ? 'Reset' : 'Personalize'}
        </button>
      </div>
    );
  }
}

export default Greeting;