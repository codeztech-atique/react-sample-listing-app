import React, { Component } from 'react';
import AddItem from './AddItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Contactus extends React.Component {
   render() {
     return(<div>
       <h1>Contact Us</h1>
       <h4>For more information, please write back to -</h4><span>Myblog Page: </span><a href="https://www.codeztech.com/p/follow-me.html" target="_blank">https://www.codeztech.com/p/follow-me.htm</a> 

       <p><span>Facebook:</span><a href="https://www.facebook.com/CodezTechnology" target="_blank">My Facebookpage</a></p>
<p><span>Twitter:</span><a href="https://twitter.com/codez_tech" target="_blank">My Twitter</a></p>
<p><span>Patreon:</span><a href="https://www.patreon.com/codeztech" target="_blank">My Patreon</a></p>
<p><span>LinkedIn:</span><a href=" https://www.linkedin.com/in/atique-ahmed-680ba5ab/" target="_blank">My LinkedIn</a></p>
<span>Instagram:</span><a href="https://www.instagram.com/mightywarriorr" target="_blank">My Instagram</a>
     </div>)
   }
}

export default Contactus