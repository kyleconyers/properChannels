import React from "react";
import "./centerLinks.css"
import { Badge } from 'reactstrap';

// const CenterLinks = props => <div className="centerLinks">{props.children}</div>



export default class CenterLinks extends React.Component {
  render() {
    return (
      <div>
        <Badge href="#" color="primary">Appropriations</Badge>
        <Badge href="#" color="secondary">Capital Budget</Badge>
        <Badge href="#" color="success">Civil Rights & Judicary</Badge>
        <Badge href="#" color="danger">College and Workforce development</Badge>
        <Badge href="#" color="warning">Commerce & Gaming</Badge>
        <Badge href="#" color="info">Consumer Protection and Business</Badge>
        <Badge href="#" color="light">Education</Badge>
        <Badge href="#" color="dark">Environment & Energy</Badge>
        <Badge href="#" color="primary">Finance</Badge>
        <Badge href="#" color="secondary">Health Care & Wellness</Badge>
        <Badge href="#" color="success">Housing, Community Development & Veterans</Badge>
        <Badge href="#" color="danger">Human Services & Early Learning</Badge>
        <Badge href="#" color="warning">Innovation, Technololgy & Economic Development</Badge>
        <Badge href="#" color="info">Labor & Workplace Standards</Badge>
        <Badge href="#" color="light">Local Government</Badge>
        <Badge href="#" color="dark">Public Safety</Badge>
        <Badge href="#" color="primary">Rules</Badge>
        <Badge href="#" color="secondary">Rural Development, Agriculture & Natural Resources</Badge>
        <Badge href="#" color="success">State Government and Tribal Relations</Badge>
        <Badge href="#" color="danger">Transportation</Badge>
     
      </div>
    );
  }
}

// function CenterLinks(props) {
//     return (
//       <div className="card">
//         <div className="img-container">
//           <img alt={props.name} src={props.image} />
//         </div>
//         <div className="content">
//           <ul>
//             <li>
//               <strong>Name:</strong> {props.name}
//             </li>
//             <li>
//               <strong>Occupation:</strong> {props.occupation}
//             </li>
//             <li>
//               <strong>Location:</strong> {props.location}
//             </li>
//           </ul>
//         </div>
//         <span onClick={() => props.removeFriend(props.id)} className="remove">
//           𝘅
//         </span>
//       </div>
//     );
//   }
  
// export default CenterLinks;