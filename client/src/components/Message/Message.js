 import React from "react";
import { List } from "../List";
import {Row, Col} from "../Grid";


function Message(props) {
  return (
    <List>
      <Row className="flex-wrap-reverse">
        <Col size="md-12">
          <div className="message-group-item">
            <p className="">{props.message.forum_id}</p>
            <p className="">{props.message.user_id}</p>
            <p className="">{props.message.date}</p>
            <p className="">{props.message.content}</p>
          </div>
          
        </Col>
        
      </Row>
      
    </List>
  );
}

export default Message;
