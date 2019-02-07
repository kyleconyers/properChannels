import React, {Component} from "react";

import { Timeline } from 'react-twitter-widgets';



// import "./wrapper.css"

// const TwitterRout = props => <div className="TwitterRout">{props.children}</div>
// const TwitterRoute = ({handle}) => {
//     const twitterUrl =  "https://twitter.com/" + handle + "?ref_src=twsrc%5Etfw"
       
    // return (

    //     <a 
    //     className="twitter-timeline" 
    //     data-width="500" 
    //     href={twitterUrl}>
    //     Tweets!
    // </a>
    // )
// }

class TwitterRoute extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        handle: null
   }
   
//    resetIframe() {
//        this.setState({random: this.state.random + 1});
//    }

//     // const twitterUrl =  "https://twitter.com/" + handle + "?ref_src=twsrc%5Etfw"
//     shouldComponentUpdate() {
//         this.forceUpdate();
//         this.reload();
//         this.setState({random: this.state.random + 1});
//         return true;
//     }

    componentDidMount() {
        // this.forceUpdate();
        // this.reload();
        this.setState({handle: this.props.handle});

    }

    render() {
        console.log("props.handle:" +  this.props.handle);
        // let twitterUrl =  "https://twitter.com/" + this.props.handle + "?ref_src=twsrc%5Etfw";
        // console.log("twitterUrl:" + twitterUrl);
        // return (
        // <a 
        // className="twitter-timeline" 
        // data-width="500" 
        // href={twitterUrl}>
        // Tweets!
        // </a>
        // )
        return (
        <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: this.props.handle.toLowerCase()
            }}
            options={{
                username: this.props.handle,
                width: '500'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
        />
        )
    }

//     reload() {
//         console.log("props.handle:" +  this.props.handle);
//         let twitterUrl =  "https://twitter.com/" + this.props.handle + "?ref_src=twsrc%5Etfw";
//         console.log("twitterUrl:" + twitterUrl);
//         return (
//         <a 
//         className="twitter-timeline" 
//         data-width="500" 
//         href={twitterUrl}>
//         Tweets!
//         </a>
//         )
//     }
    

}

export default TwitterRoute;