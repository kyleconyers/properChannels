 import React from "react";
import { List } from "../List";
import {Row, Col} from "../Grid";


function Message(props) {
  if (props.message) {
    return (
      <List>
        <Row className="flex-wrap-reverse">
          <Col size="md-12" >
            <div className="message-group-item">
              
              <h6 className="author" >
                Author: {props.message.user.local.username}
              </h6>
              
              <h6 className="date">
                Posted: {new Date(props.message.date).toLocaleString("en-US")}
              </h6>

              <p className="message">
              {props.message.content}
            </p>  
            </div> 
            
            
            
          </Col>

        </Row>
        
      </List>
    );
  }
}

export default Message;
