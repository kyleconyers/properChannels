import "./districts.css"

//const Districts = props => <div className="districts">{props.children}</div>

import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import {List} from "../List";
import Senator from "../Senator";
import SignupForm from "../SignupForm";
import API from "../../utils/API";
import axios from "axios";
//const User = require('../../../db/models/user');

class Districts extends Component {

  state = {
     senators: [],
     congressmen: [],
     user: this.props.user
  }

  componentDidMount() {
    console.log("THIS.PROPS:");
    console.log(this.props);
  }
  
    // Populate state with user data
      // if (props.address) {
      //   this.setState(
      //     {
      //       address: props.address
      //     }
      //   )        
      // }

//}


  // getSenators = () => {
  //   API.getSenators()
  //     .then(res => {
  //       console.log("RES:");
  //       console.log(res);
  //       this.setState({
  //         senators: res
  //       })}
  //     )
  //     .catch(() =>
  //       this.setState({
  //         senators: [],
  //         message: "No Senators Found, Try a Different Query"
  //       })
  //     );
  // };

  // componentDidMount() {
  //   this.getSenators();
  // }

  componentWillMount() {
    axios({
      method: 'get',
      baseURL: 'https://api.propublica.org/congress/v1/116/senate/members.json',
      headers: {'X-API-Key': 'kbvtlqxgtqEP4TbguBcbVICEbNTmsBy8f9r4owm6'}
    }).then(res => {
      // do something with data
      console.log('api response in componentDidMount: ', res.data)
      this.setState({
        senators: res.data.results,
        user: this.props.user
      })
    })    
    .catch(err => console.log(err));

    axios({
      method: 'get',
      baseURL: 'https://api.propublica.org/congress/v1/116/house/members.json',
      headers: {'X-API-Key': 'kbvtlqxgtqEP4TbguBcbVICEbNTmsBy8f9r4owm6'}
    }).then(res => {
      // do something with data
      console.log('api response in componentDidMount for congress: ', res.data)
      this.setState({
        congressmen: res.data.results,
        user: this.props.user
      })
    })    
    .catch(err => console.log(err));
    }
  

  render() {
    console.log("senators:");
    console.log(this.state.senators);
    const waSenators = [];
    const waCongressmen = [];
    console.log("THIS.PROPS in render:")
    console.log(this.props);
    if (this.props.user != null) {
      console.log("THIS.PROPS.USER.ADDRESS")
      console.log(this.props.user.address);
    }
    this.state.senators.length?(this.state.senators[0].members.map(senator => {
    if (this.props.user != null) {
      if (senator.state === this.props.user.address) {
        waSenators.push(senator);
        }
      }
    })):(console.log(""));

    this.state.congressmen.length?(this.state.congressmen[0].members.map(congressman => {
      if (this.props.user != null) {
        if (congressman.state === this.props.user.address) {
          waCongressmen.push(congressman);
          }
        }
      })):(console.log(""));
  
    if (this.props.user == null) {
      return (
        <Container>
          <Row>
            <h1>LOADING....</h1>
          </Row>
        </Container>
      )
    } else {
    return (
      <Container>
        <Row>
              {this.state.senators.length ? (
                <List>
                  {
                  waSenators.map(senator => (
                    <Senator
                    first_name={senator.first_name}
                    last_name={senator.last_name}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
        </Row>
        <Row>
              {this.state.congressmen.length ? (
                <List>
                  {
                  waCongressmen.map(senator => (
                    <Senator
                    first_name={senator.first_name}
                    last_name={senator.last_name}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
        </Row>
        {/* <Footer /> */}
      </Container>
    );
  }
}
}


export default Districts;