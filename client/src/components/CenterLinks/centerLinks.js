import React from "react";
import "./centerLinks.css"

// const CenterLinks = props => <div className="centerLinks">{props.children}</div>

const CenterLinks = props => (
    <div className="centerLinks" onClick={() => props.handleClick(props.id)}>
        <span className="badge badge-primary">{props.name}</span>
        {/* <img alt={props.name} src={props.image} /> */}
    </div>
)

export default CenterLinks;