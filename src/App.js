import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NaviBar from './components/Navibar';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Home} from './Home' 
import {Output} from './Output' 
import {newPassword} from './Password' 
import {dataInput} from './DataInput' 
import {Login} from './Login'
import {Registr} from './Registr' 

function App() {
  return (
    <>
    <Router>
    {/* <NaviBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/output" component={Output} />
      <Route path="/password" component={newPassword} />
      <Route path="/datainput" component={dataInput} />
      <Route path="/login" component={Login} />
      <Route path="/reg" component={Registr} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
