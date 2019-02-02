import React from "react";
import "../../App.css";
import { Badge } from 'reactstrap';

// const CenterLinks = props => <div className="centerLinks">{props.children}</div>



export default class CenterLinks extends React.Component {

  state = {
    href: null
  }

  componentDidMount() {
    var url = window.location.href;
    var urlSplit = url.split("/");    
    if (urlSplit.length > 5) {
      var to = url.lastIndexOf('/');
      to = to == -1 ? url.length : to + 1;
      url = url.substring(0, to-1);
    }

    this.setState (
      {
        href: url
      }
    )
  }


  render() {
    return (      
      <div className="centerLinks">
        <Badge href={this.state.href+`/all`} color="primary">All Committees</Badge>
        <Badge href={this.state.href+`/appropriations`} color="primary">Appropriations</Badge>
        <Badge href={this.state.href+`/capital_budget`} color="secondary">Capital Budget</Badge>
        <Badge href={this.state.href+`/civil_rights`} color="success">Civil Rights & Judicary</Badge>
        <Badge href={this.state.href+`/college`} color="danger">College and Workforce development</Badge>
        <Badge href={this.state.href+`/commerce`} color="warning">Commerce & Gaming</Badge>
        <Badge href={this.state.href+`/consumer`} color="info">Consumer Protection and Business</Badge>
        <Badge href={this.state.href+`/education`} color="light">Education</Badge>
        <Badge href={this.state.href+`/environment`} color="dark">Environment & Energy</Badge>
        <Badge href={this.state.href+`/finance`} color="primary">Finance</Badge>
        <Badge href={this.state.href+`/health`} color="secondary">Health Care & Wellness</Badge>
        <Badge href={this.state.href+`/housing`} color="success">Housing, Community Development & Veterans</Badge>
        <Badge href={this.state.href+`/human`} color="danger">Human Services & Early Learning</Badge>
        <Badge href={this.state.href+`/innovation`} color="warning">Innovation, Technololgy & Economic Development</Badge>
        <Badge href={this.state.href+`/labor`} color="info">Labor & Workplace Standards</Badge>
        <Badge href={this.state.href+`/local_government`} color="light">Local Government</Badge>
        <Badge href={this.state.href+`/public_safety`} color="dark">Public Safety</Badge>
        <Badge href={this.state.href+`/rules`} color="primary">Rules</Badge>
        <Badge href={this.state.href+`/rural_development`} color="secondary">Rural Development, Agriculture & Natural Resources</Badge>
        <Badge href={this.state.href+`/state_government`} color="success">State Government and Tribal Relations</Badge>
        <Badge href={this.state.href+`/transportation`} color="danger">Transportation</Badge>
     
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