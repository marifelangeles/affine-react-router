import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Animals from './Components/Animals/Animals.js'
import Plants from './Components/Plants/Plants.js'
import Home from './Components/Home/Home.js'
import About from './Components/About/About'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>React Router Affine Lecture</h1>
       <Router>
         <div>
           <h2>This element has no route!</h2>
           <ul>
            <li><Link to="/" className="nav">Home</Link></li>
            <li><Link to="/plants" className="nav">Plants</Link></li>
            <li><Link to="/animals" className="nav">Animals</Link></li>
            <li><Link to="/about" className="nav">About</Link></li>
           </ul>
          <Route exact path="/" component={ Home } />
          <Route path="/plants" component={ Plants }/>
          <Route path="/animals" component={ Animals }/>
          <Route path="/about" component={ About } />
         </div>
       </Router>
      </div>
    );
  }
}

export default App;
