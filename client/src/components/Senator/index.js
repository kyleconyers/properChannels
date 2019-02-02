import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
// import "./style.css";
import '../../App.css';

function Senator({first_name, last_name, title}) {

  let address="https://en.wikipedia.org/wiki/"+first_name+"_"+last_name;

  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-12">
        <a href={`https://en.wikipedia.org/wiki/${first_name}_${last_name}`} target="_blank" ><p id="senator">{title} {first_name} {last_name}</p></a>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Senator;

