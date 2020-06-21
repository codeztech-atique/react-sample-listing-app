import React, { Component } from 'react';
import { render } from 'react-dom';
import AddItem from './component/AddItem';
import Aboutus from './component/Aboutus';
import Contactus from './component/Contactus';

import Hello from './Hello';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


import {dataService} from './RXJSDataservice';
import './css/todoItem.css';
import './css/index.css';

class App extends Component {
  
  constructor() {
    this.state = {
      name: 'Todo Application',
    };
    
  }
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home </Link>
          <Link to="/about">  About</Link>
          <Link to="/contact">  Contact</Link>

          <Switch>
          
          <Route path="/about">
            <Aboutus />
          </Route>
          <Route path="/contact">
            <Contactus />
          </Route>
          <Route path="/">
           <Hello name={this.state.name} />
            <AddItem />
          </Route>

        </Switch>
        </div>
      </Router>
    );
  }
  
}

render(<App />, document.getElementById('root'));
