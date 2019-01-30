import React from "react";
import { ListItem } from "../List";
import {Row, Col} from "../Grid";

// import "./Message.css";
// import MessageList from "../MessageList";

// const Message = props => (
//     <div>

       
//       {/* <h3>{props.district}</h3> */}
//       <h3>{props.title}</h3> 
//       <h4>{props.author}</h4> 
//       <h4>{props.body}</h4>
//       <h4>{props.category}</h4>  
//     </div>
// )
//(header) district ID/name
//body(-messages(message-list))
function Message({title, author, body, category}) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-12">
          <h3 className="font-italic">{title}</h3>
          {<h5 className="font-italic">{author}</h5>} 
          <p className="font-italic small"> {body}</p> <p>{category}</p>
        </Col>
        
      </Row>
      
    </ListItem>
  );
}

export default Message;
