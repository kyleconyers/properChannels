 import React from "react";
import { List } from "../List";
import {Row, Col} from "../Grid";


function Message(props) {
  if (props.message) {
    return (
      <List>
        <Row className="flex-wrap-reverse">
          <Col size="md-12">
            <div className="message-group-item">

              <p className="">
                {props.message.content}
              </p>

              <br/>

              <p className="">
                Author: {props.message.user.local.username}
              </p>

              <br/>

              <p className="">
                Posted: {new Date(props.message.date).toLocaleString("en-US")}
              </p>
              
            </div>
            
          </Col>
          
        </Row>
        
      </List>
    );
  }
}

export default Message;
