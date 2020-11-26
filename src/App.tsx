import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './containers/Login/Login' 
import SignUp from './containers/SignUp/SignUp' 

function App() {
  return (
    <Router>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/profiles" component={SignUp}/>
    </Router>
  );
}

export default App;
