import React from 'react';
import { Menu, Grid, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
     <Router>
       <div>
         <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/profile' component={Profile} />
           <Route exact path='/login' component={Login} />
         </Switch>
       </div>
     </Router>
    </div>
  );
}

export default App;
