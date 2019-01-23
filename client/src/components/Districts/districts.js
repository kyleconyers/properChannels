import "./districts.css"

//const Districts = props => <div className="districts">{props.children}</div>

import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import {List} from "../List";
import Senator from "../Senator";
import API from "../../utils/API";
import axios from "axios";

class Districts extends Component {
  state = {
    senators: []
  };

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
        senators: res.data.results
      })
    })    
    .catch(err => console.log(err));
    }
  

  render() {
    console.log("senators:");
    console.log(this.state.senators);
    const waSenators = [];
    this.state.senators.length?(this.state.senators[0].members.map(senator => {
    if (senator.state === "WA") {
      waSenators.push(senator);
      }
    })):(console.log(""));
    

    return (
      <Container>
        <Row>
            {/* </Row><Card title="Results"> */}
              {this.state.senators.length ? (
                <List>
                  {
                  waSenators.map(senator => (
                    <Senator
                    first_name={senator.first_name}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            {/* </Row></Card> */}
          {/* </Col> */}
        </Row>
        {/* <Footer /> */}
      </Container>
    );
  }
}


export default Districts;