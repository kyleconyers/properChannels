import React, {Component} from "react";
// import "./Board.css";
import MessageList from "../MessageList";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List } from "../List";
import Message from "../Message";
import Form from "../Form";
import Card from "../Card";

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

// Array.filter( function( item ) {
//   return item.uSState === 'WA'
// }
{/* <h3>{props.title}</h3>
      <h3>{props.name}</h3> 
      <h4>{props.category}</h4> 
      <h4>{props.message}</h4>  */}

      class Board extends Component {
     
    
    state = {
        messages: [],
        currentUsState: ""
      };
      //passvvvvv form_id or whatever message board we are on 
    componentDidMount() {
        this.getSavedMessage();
        API.getSavedForum()
        // .then(data => data.json())
        .then(data => console.log(data.data));

      }
    //load data.data toooooo load this into state
    //store array of possibble US states into STATEdom
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

     //This Green Part needs to be turned into message section
     ////////////////////////////////
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        // console.log("inside change")
      };
   
    handleMessageSave = id => {
        // const message = this.state.message.find(message => message.id === id);
      
        console.log(this.props)
        API.saveMessage({
          //this.state.currentusstate
          forum_id: "5c50c8d52bc45519e9f1b9b9",
          user_id: this.props.user._id,
          content: this.state.q,
          date: new Date()
        }).then(() => this.getSavedMessage());
      };
      // resUser._id
     
      handleFormSubmit = event => {
        event.preventDefault();
        this.handleMessageSave();
        // this.db.insert();
        console.log("inside sumbit")
      };
    
      

      /*
      */
    
      render() {
        return (
          <Container>
            
            <Row>
              <Col size="md-12">
              <Card title="Post Content" icon="far fa-book">
                  <Form
                     handleInputChange={this.handleInputChange}
                     handleFormSubmit={this.handleFormSubmit}
                     q={this.state.q}
                    />
              </Card>  

                  <MessageList 
                    messages = {this.state.messages}
                  />

              </Col>
             </Row>

            {/* <Row>
              <Message message={this.state.messages[0]}>
              
              </Message> 
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
               
            </Row> */}
            
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
