import React from "react";
// import "./Board.css";
import MessageList from "../MessageList";

//props.messages
const fakeMessages = [
    {

        district: "1",
        title: "title",
        author: "author",
        body: "body",
        category: [0],


        // title: "title",
        // name: "name",
        // category: "category",
        // message: "message"
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
        <MessageList district = "2" />
    </div>
)
//(header) district ID/name
//body(-messages(message-list))

export default Board;
