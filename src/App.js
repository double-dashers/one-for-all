import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Views/Profile';
import Login from './Views/Login';
import './App.css';
import Layout from './Components/Layout';
import WindowDimensionsProvider from './utils/WindowDimensionsProvider';

function App() {
  return (
    <WindowDimensionsProvider>
      <div>
        <Router>
          <div>
            <Layout breakpoint={767}>
              <Switch>
                <Route exact path="/" component={Profile} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Layout>
          </div>
        </Router>
      </div>
    </WindowDimensionsProvider>
  );
}

export default App;
