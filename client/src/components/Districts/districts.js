// import "./districts.css"
// import React from "react";

//const Districts = props => <div className="districts">{props.children}</div>

import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import {List} from "../List";
import Senator from "../Senator";
import SignupForm from "../SignupForm";
import API from "../../utils/API";
import axios from "axios";
import SelectUSState from 'react-select-us-states';

class Districts extends Component {

  constructor(props) {
    super(props);
 
    this.setNewValue = this.setNewValue.bind(this);
  }
 

  state = {
     senators: [],
     congressmen: [],
     user: this.props.user,
     state: null
  }

  setNewValue(newValue) {
    console.log('this is the State code:' + newValue);
    this.setState ({
      state: newValue
    })
  }

  componentDidMount() {
    console.log("THIS.PROPS:");
    console.log(this.props);
  }
  

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
    var waSenators = [];
    var waCongressmen = [];
    console.log("THIS.PROPS in render:")
    console.log(this.props);
    if (this.props.user != null) {
      console.log("THIS.PROPS.USER.ADDRESS")
      console.log(this.props.user.address);
    }

    if (this.props.user != null) {
    this.state.senators.length?(this.state.senators[0].members.map(senator => {
    
      if (senator.state === this.props.user.address) {
        waSenators.push(senator);
        }
      
    })):(console.log(""));
  }

    if (this.props.user != null) {

    this.state.congressmen.length?(this.state.congressmen[0].members.map(congressman => {
        if (congressman.state === this.props.user.address) {
          waCongressmen.push(congressman);
          }        
      })):(console.log(""));
    }

    if (this.state.state != null) {
      waSenators = [];
      this.state.senators.length?(this.state.senators[0].members.map(senator => {
          if (senator.state === this.state.state) {
            waSenators.push(senator);
            }          
        })):(console.log(""));
      }

      if (this.state.state != null) {
        waCongressmen = [];
        this.state.congressmen.length?(this.state.congressmen[0].members.map(congressman => {
            if (congressman.state === this.state.state) {
              waCongressmen.push(congressman);
              }            
          })):(console.log(""));
        }
    
      
    if ((this.props.user == null)&&(this.state.state == null)) {
      return (
        <Container className="districtContainer">
          <Row>
            <h1>LOADING....</h1>
          </Row>
        </Container>
      )
    } else {
    return (
      <Container className="districtContainer">
        <Row>
          <p id="state_selector_text">
             Select a state: <SelectUSState selectedValue="Washington" id="state_selector" className="myClassName" onChange={this.setNewValue}/>
          </p>
        </Row>
        <Row>
              {this.state.senators.length ? (
                <List>
                  {
                  waSenators.map(senator => (
                    <Senator
                    first_name={senator.first_name}
                    last_name={senator.last_name}
                    title={"Senator"}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
        </Row>
        <Row><p></p></Row>
        <Row>
              {this.state.congressmen.length ? (
                <List>
                  {
                  waCongressmen.map(senator => (
                    <Senator
                    first_name={senator.first_name}
                    last_name={senator.last_name}
                    title={"Congressman"}
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