import React, { Component } from "react";
// import "./rightSideBar.css"
import Senator from "../Senator";

//const rightSideBar = props => <div className="rightSideBar">{props.children}</div>

class rightSideBar extends Component {
  
 
  render() {

       console.log("blah");


       return (
            <div className="rightSideBar">{this.props.children}</div>
       );
  }
 
 }


export default rightSideBar;