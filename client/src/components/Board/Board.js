import React, {Component} from "react";
// import "./Board.css";
import MessageList from "../MessageList";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List } from "../List";
import Message from "../Message";

//props.messages
// const fakeMessages = [
//     {

//         district: "1",
//         title: "title",
//         author: "author",
//         body: "body",
//         category: [0],


//         // title: "title",
//         // name: "name",
//         // category: "category",
//         // message: "message"
//     }
// ];


{/* <h3>{props.title}</h3>
      <h3>{props.name}</h3> 
      <h4>{props.category}</h4> 
      <h4>{props.message}</h4>  */}

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
                <MessageList title="Results">
                  {this.state.message ? (
                    <List>
                      {this.state.message.map(message => (
                        <Message
                          key={message.id}
                          title={message.title}
                          
                         
                          author={message.author}
                          body={message.body}
                          category={message.category}
                          
                        />
                      ))}
                    </List>
                  ) : (
                    <h2 className="text-center">{this.state.message}</h2>
                  )}
                </MessageList>
              </Col>
            </Row>
            
          </Container>
        );
      }
    }

//       const Board = props => (
//     <div>
//         <h3>
//             {props.districtId}
//         </h3>
//         <MessageList district = "2" />
//     </div>
// )
// (header) district ID/name
// body(-messages(message-list))

export default Board;
