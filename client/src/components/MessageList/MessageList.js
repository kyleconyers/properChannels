import React from "react";
import "./MessageList.css";
import Message from "../Message";



const MessageList = props => (
    <div>
        {props.messages.map(
            (message, i) => <Message key={i} {...message} /> 
        )}
    </div>
)
//(header) district ID/name
//body(-messages(message-list))

export default MessageList;
