import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
// import "./style.css";
import '../../App.css';

function Senator({first_name, last_name, title, twitter, twitterFunction}) {

  let address="https://en.wikipedia.org/wiki/"+first_name+"_"+last_name;

  console.log("Twitter Function : " + twitterFunction);

  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-12">
        <span><a href={`https://en.wikipedia.org/wiki/${first_name}_${last_name}`} target="_blank" ><p id="senator">{title} {first_name} {last_name}</p></a> <button onclick={() => twitterFunction(twitter)} class=" twit fab fa-twitter-square fa-pull-right"></button></span>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Senator;

