import React from "react";
import "./Board.css";
import MessageList from "../MessageList";

//props.messages
const fakeMessages = [
    {
        title: "1",
        name: "2",
        category: "3",
        message: "4"
    }
];

{/* <h3>{props.title}</h3>
      <h3>{props.name}</h3> 
      <h4>{props.category}</h4> 
      <h4>{props.message}</h4>  */}


const Board = props => (
    <div>
        <h3>
            {props.districtId}
        </h3>
        <MessageList messages={fakeMessages} />
    </div>
)
//(header) district ID/name
//body(-messages(message-list))

export default Board;
