import React from "react";
import "./Message.css";
// import MessageList from "../MessageList";

const Message = props => (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.name}</h3> 
      <h4>{props.category}</h4> 
      <h4>{props.message}</h4> 
    </div>
)
//(header) district ID/name
//body(-messages(message-list))

export default Message;
