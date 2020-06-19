import React, { Component } from 'react';
import '../css/todoItem.css';


//  <span className="item-remove" style={{color: "red", cursor: "pointer"}} onClick={() => this.onDelete(data)}> X</span>
// {todoEntries.map((item, cnt) => {
//             console.log(item, item.text);
//              <ul key={cnt}>
//                 <li>{item.text}
                  
//                 </li>
//              </ul>
//           })}
export class TodoItem extends React.Component {
    createTasks(item) {
      return  <div class="todo-item"><li className="item-name" key={item.key}>{item.text} </li></div>   
    }
    onDelete(item) {
      console.log(item);
    }
    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);
      return(
          <div>
            {listItems}
          </div>
      );
    }
}


export default TodoItem;