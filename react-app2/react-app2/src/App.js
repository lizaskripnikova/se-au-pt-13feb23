// module 7 slide 18
/*import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <div className="App">
      <Greeting />
    </div>
  );
};*/




//module 7 slide 18 pt2
/*export default App;

import React from 'react';
import Greeting from './Greeting';
import Clock from './Clock';

const App = () => {
  return (
    <div className="App">
      <Greeting />
      <Clock />
    </div>
  );
};

export default App; */





//module 7 slide 33
/*import React from 'react';
import Greeting from './Greeting';
import Emoji from './Emoji';

const App = () => {
  return (
    <div className="App">
      <Greeting />
      <Emoji />
    </div>
  );
};

export default App; */



// module 7 slide 33 pt2
/*import React from 'react';
import Greeting from './Greeting';
import Clock from './Clock';
import { EmojiProvider } from './EmojiContext';

const App = () => {
  return (
    <div className="App">
      <Greeting />
      <EmojiProvider>
        <Clock />
      </EmojiProvider>
    </div>
  );
};

export default App; */

// module 7 slide 46
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
};

export default App;

