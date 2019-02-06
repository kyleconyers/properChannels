import React, {Component} from "react";
// import "./Board.css";
import MessageList from "../MessageList";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List } from "../List";
import Message from "../Message";
import Form from "../Form";
import Card from "../Card";


      class Board extends Component {
     
    
    state = {

        messages: [],
        currentUsState: "",
        currentForumId: ""
      };
      //passvvvvv form_id or whatever message board we are on 
    componentDidMount() {
        const path = window.location.pathname.split("/");
        if(path[1] !== 'forum'){
          // throw exception because we dont understand how this url is formatted
          return;
        }
        const forumName = path[2].toUpperCase();
        if (forumName) {
          console.log(forumName);
          API.getSavedForum(forumName)
          // .then(data => data.json())
          .then(data => {
            if (data.data) {
              const forumId = data.data._id;
              this.getSavedMessage(forumId);
            }
          });
        }

      }
    //load data.data toooooo load this into state
    //store array of possibble US states into STATEdom
    getSavedMessage = (forum_id) => {

        var tags = window.location.href.split("/");
        var tag = "all";
        if (tags.length > 5) {
          tag = tags[5];
        }


        API.getSavedMessageByForumAndTag(forum_id, tag)
          .then(res =>{
            console.log(res.data)
            this.setState({
              currentForumId: forum_id,
              messages: res.data
            })}
          )
          .catch(err => console.log(err));
      };
      //get path 
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
       
        var tags = window.location.href.split("/");
        var tag = tags[5];
    

        console.log(this.props)
        API.saveMessage({
          //this.state.currentusstate
          forum_id: this.state.currentForumId,
          user: this.props.user._id,
          content: this.state.q,
          date: new Date(),
          tag: tag
        }).then(()=>this.setState({q:""}))
        .then(() => this.getSavedMessage(this.state.currentForumId));
      };
      // resUser._id
     
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.q) {
          this.handleMessageSave();
          // this.db.insert();
          console.log("inside sumbit")
        } else {
          console.log("EMPTY MESSAGE, DID NOT SUBMIT")
        }
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



export default Board;
