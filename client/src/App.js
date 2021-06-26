import React,{ useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import './App.scss';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset';
import Home from './pages/Home';

export const CredentialsContext = React.createContext('');///////////////:  null karna hai

function App() {
  const credentialsState = useState('');///////////////:  null karna hai
  return (
    <div className="main">
      <CredentialsContext.Provider value={credentialsState}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/reset">
            <Reset/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
        </Switch>
      </Router>
      </CredentialsContext.Provider>
    </div>
  );
}

export default App;
