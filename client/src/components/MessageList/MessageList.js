import React from "react";
// import "./MessageList.css";
import Message from "../Message";

class MessageList extends React.Component{

    render(){
        return (<div className="message-group-item">
                {this.props.messages.map(
                    (message) => <Message key={message._id} message={message} /> 
                )}
                </div>)
    }

}


export default MessageList;