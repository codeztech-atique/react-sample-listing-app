import React, { Component } from 'react';
import {dataService} from '../RXJSDataservice';
import TodoItem from './TodoItem';
import '../css/addItem.css';


export class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: []
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
  
      this.setState(() => {
        return { 
          items: this.state.items.concat(newItem) 
        };
      });
      this._inputElement.value = "";
    } 
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <form id="add-todo" onSubmit={this.addItem}>
          <input type="text" ref={(a) => this._inputElement = a} 
          placeholder="Enter your task here..."  />
          <input type="submit" value="Hit me" />
        </form>
        <TodoItem entries={this.state.items} />
      </div>
      
    );
  }
}

export default AddItem;