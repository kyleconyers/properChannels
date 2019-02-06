import React from "react";
// import "./MessageList.css";
import Message from "../Message";

class MessageList extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            messages: []
        }
        
    }

    render(){
        const { messages } = this.state;
        return (<div className="message-group-item">
                {this.props.messages.map(
                    (message, i) => <Message key={i} message={message} /> 
                )}
                </div>)
    }

}


export default MessageList;