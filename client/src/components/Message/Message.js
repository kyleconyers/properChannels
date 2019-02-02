 import React from "react";
import { List } from "../List";
import {Row, Col} from "../Grid";


function Message(props) {
  return (
    <List>
      <Row className="flex-wrap-reverse">
        <Col size="md-12">
          <div className="message-group-item">
            {/* <p className="">{
            (props.message)
            ?
            props.message.forum_id
            :
            "LOADINGs"
          }</p> */}


          <br></br>

          <p className="">{
            (props.message)
            ?
            props.message.user.local.username
            :
            "LOADINGs"
          }</p>

          <br></br>

          <p className="">{
            (props.message)
            ?
            // props.message.date
            new Date(props.message.date).toLocaleString("en-US")
            :
            "LOADINGs"
          }</p>
          
          <br></br>
          
          <p className="">{
            (props.message)
            ?
            props.message.content
            :
            "LOADINGs"
          }</p>
          </div>
          
        </Col>
        
      </Row>
      
    </List>
  );
}

export default Message;
