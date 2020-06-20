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
// <div>
//   {todoEntries.map((data, cnt) => {
//       console.log(data);
//   })}
// </div>
// {this.state.todoEntries.map((item,cnt) => {
//             console.log(item);
//             <div>
//               <li key={cnt}>
//                 {item.text}
//               </li>
//             </div>
//          })} 
export class TodoItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todoEntries: [],
      }
    }
    

    onDelete(data) {
      var abc = this.state.todoEntries.filter((val, index) => {
        return data!==val;
      })

      this.props.entries.map((val, index) => {
        if(data===val.text) {
          delete this.props.entries[index];
        }
      })
      this.setState({todoEntries:this.props.entries});
    }
    
    render() {
      this.state.todoEntries = [];
      this.props.entries.map((data, cnt)=> {
         this.state.todoEntries.push(data.text);
      })
      return(
        <div>
          {this.state.todoEntries.map((data, cnt) => (
            <ul key={cnt}> 
              <li>{data}<span style={{color: "red", cursor: "pointer"}} onClick={() => this.onDelete(data)}> X</span></li>
            </ul>
          ))}
        </div>
      );
    }
}


export default TodoItem;