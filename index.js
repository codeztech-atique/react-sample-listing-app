import React, { Component } from 'react';
import { render } from 'react-dom';
import AddItem from './component/AddItem';
import Hello from './Hello';


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
      <div>
        <Hello name={this.state.name} />
        <AddItem />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
