import React, { Component } from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
// import "./style.css";
import '../../App.css';

// function Senator({first_name, last_name, title}) {
  
//   return (
//     <ListItem>
//       <Row className="flex-wrap-reverse">
//         <Col size="md-12">
//           <p id="senator">{title} {first_name} {last_name}</p>
//         </Col>
//       </Row>
//     </ListItem>
//   );
// }

class Senator extends Component {
  
   state = {
     first_name: this.props.first_name
 }

 render() {
      return (
        <ListItem>
          <Row className="flex-wrap-reverse">
            <Col size="md-12">
              <p id="senator">{this.props.title} {this.props.first_name} {this.props.last_name}</p>
            </Col>
          </Row>
        </ListItem>
      );
 }

}

export default Senator;

