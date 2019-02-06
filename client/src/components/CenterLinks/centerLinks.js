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
        <Badge href={this.state.href+`/all`} color="danger">All Committees</Badge>
        <Badge href={this.state.href+`/innovation`} color="warning">Innovation, Technololgy & Economic Development</Badge>
        <Badge href={this.state.href+`/consumer`} color="warning">Consumer Protection and Business</Badge>
        <Badge href={this.state.href+`/finance`} color="warning">Finance</Badge>
        <Badge href={this.state.href+`/appropriations`} color="primary">Appropriations</Badge>
        <Badge href={this.state.href+`/civil_rights`} color="primary">Civil Rights & Judicary</Badge>
        <Badge href={this.state.href+`/college`} color="primary">College and Workforce development</Badge>
        <Badge href={this.state.href+`/education`} color="primary">Education</Badge>
        <Badge href={this.state.href+`/environment`} color="primary">Environment & Energy</Badge>
        <Badge href={this.state.href+`/health`} color="primary">Health Care & Wellness</Badge>
        <Badge href={this.state.href+`/housing`} color="primary">Housing, Community Development & Veterans</Badge>
        <Badge href={this.state.href+`/human`} color="primary">Human Services & Early Learning</Badge>
        <Badge href={this.state.href+`/capital_budget`} color="success">Capital Budget</Badge>
        <Badge href={this.state.href+`/commerce`} color="success">Commerce & Gaming</Badge>
        <Badge href={this.state.href+`/labor`} color="success">Labor & Workplace Standards</Badge>
        <Badge href={this.state.href+`/local_government`} color="success">Local Government</Badge>
        <Badge href={this.state.href+`/public_safety`} color="success">Public Safety</Badge>
        <Badge href={this.state.href+`/rules`} color="success">Rules</Badge>
        <Badge href={this.state.href+`/rural_development`} color="success">Rural Development, Agriculture & Natural Resources</Badge>
        <Badge href={this.state.href+`/state_government`} color="success">State Government and Tribal Relations</Badge>
        <Badge href={this.state.href+`/transportation`} color="success">Transportation</Badge>
     
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