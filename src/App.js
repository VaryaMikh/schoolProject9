import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NaviBar from './components/Navibar';
import { createGlobalState } from 'react-hooks-global-state';


import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Home} from './Home' 
import {Output} from './Output' 
import {NewPassword} from './Password' 
import {DataInput} from './DataInput' 
import {Login} from './Login'
import {Registr} from './Registr' 

const userState = { authenticated: false, email:'' };
const { useGlobalState } = createGlobalState(userState);

function App() {
  return (
    <>
    <Router>
    {/* <NaviBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/output" component={Output} />
      <Route path="/password" component={NewPassword} />
      <Route path="/datainput" component={DataInput} />
      <Route path="/login" component={Login} />
      <Route path="/reg" component={Registr} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
