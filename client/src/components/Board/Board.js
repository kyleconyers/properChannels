import React, {Component} from "react";
// import "./Board.css";
import MessageList from "../MessageList";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List } from "../List";
import Message from "../Message";


      class Board extends Component {
     
    
    state = {
        messages: []
      };
    componentDidMount() {
        this.getSavedMessage();
      }
    
    getSavedMessage = () => {
        API.getSavedMessage()
          .then(res =>{
            console.log(res.data)
            this.setState({
              messages: res.data
            })}
          )
          .catch(err => console.log(err));
      };
      render() {
        return (
          <Container>
            
            <Row>
              <Col size="md-12">


              <MessageList 
                messages = {this.state.messages}
              />


              </Col>
            </Row>
            
          </Container>
        );
      }
    }



export default Board;
