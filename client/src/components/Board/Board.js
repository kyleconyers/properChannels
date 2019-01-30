import React, {Component} from "react";

// import "./Board.css";
import MessageList from "../MessageList";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List } from "../List";
import Message from "../Message";

class Board extends Component {
    state = {
      message: [],
      q: "",
    };
  //is this where we select (WA)STATA/BOARD
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    getSavedMessage = () => {
      API.getSavedMessage(this.state.q)
        .then(res =>
          this.setState({
            message: res.data
          })
        )
        .catch(() =>
          this.setState({
            message: []
          })
        );
    };
    render() {
      return (
        <Container>
          
          <Row>
            <Col size="md-12">
              <MessageList title="Results">
                {this.state.message.length ? (
                  <List>
                    {this.state.message.map(message => (
                      <Message
                        key={message.id}
                        title={message.volumeInfo.title}
                        
                        author={message.volumeInfo.author}
                        body={message.volumeInfo.body}
                        category={message.volumeInfo.category}
                        
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







// //props.messages
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


// const Board = props => (
//     <div>
//         <h3>
//             {props.district}
//         </h3>
//         <MessageList district = "2" />
//     </div>
// )
// (header) district ID/name
// body(-messages(message-list))

export default Board;
