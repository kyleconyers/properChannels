import React from "react";
// import "./MessageList.css";
import Message from "../Message";

const fakeData = [
   {
       district: "1",
       title: "title",
       author: "author",
       body: "body",
       category: [0],
       

   },
   {
        district: "2",
        title: "title2",
        author: "author2",
        body: "body2",
        category: [0, 1],
    
    }
]
const fetchData = (district, categories) => {

    /* TODO: fetch({
        uri: "myawesomeuri.com/getMessages?district={district}&categories={categories}"
        // finish the fetch call
    })*/
    console.log(fakeData)
    return fakeData.filter((d) => {
        return d.district === district
    })
    return fakeData
};

class MessageList extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            messages: []
        }
        
    }

    render(){
        const { messages } = this.state;
        return (<div>
                {messages.map(
                    (message, i) => <Message key={i} {...message} /> 
                )}
                </div>)
    }
    componentDidMount(){
        const messages = fetchData(this.props.district, this.props.categories);
        // todo make this work with messages as a promise
        this.setState({
            messages: messages
        });

    }
}

// const MessageList = props => (
    
//     <div>
//         {props.messages.map(
//             (message, i) => <Message key={i} {...message} /> 
//         )}
//     </div>
// )
//(header) district ID/name
//body(-messages(message-list))

export default MessageList;
