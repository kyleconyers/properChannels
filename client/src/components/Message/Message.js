import React from "react";
// import "./Message.css";
// import MessageList from "../MessageList";

const Message = props => (
    <div>

       
      {/* <h3>{props.district}</h3> */}
      <h3>{props.title}</h3> 
      <h4>{props.author}</h4> 
      <h4>{props.body}</h4>
      <h4>{props.category}</h4> 
      <h4>{props.district}</h4>
      <h4>{props.state}</h4> 
    </div>
)
//(header) district ID/name
//body(-messages(message-list))

export default Message;
