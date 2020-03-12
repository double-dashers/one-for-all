import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Profile from './Views/Profile';
import Login from './Views/Login';
import './App.css';
import Layout from './Components/Layout';
import Main from './Views/Main';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Layout>
            <Switch>
              <Route exact path="/" component={Main} />
              {/* <Route exact path="/profile" component={Profile} /> */}
              <Route exact path="/login" component={Login} />
            </Switch>
          </Layout>
        </div>
      </Router>
    </div>
  );
}

export default App;
