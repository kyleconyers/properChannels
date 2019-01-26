import React from "react";
// import "./centerBody.css"
import Board from "../Board";

const CenterBody = props => 
<div className="centerBody">{props.children}
    <div className="BoardContainer">
        <Board />
    </div>
</div>



export default CenterBody;
