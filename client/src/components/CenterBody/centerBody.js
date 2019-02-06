import React from "react";
import {Route} from "react-router-dom";
// import "./centerBody.css"
import Board from "../Board";

const CenterBody = props => 
    <div className="centerBody">{props.children}
        <div className="BoardContainer">
            <Route 
                path="/forum" 
                render={ ()=> <Board user={props.user}/> }
            />
            
        </div>
    </div>

export default CenterBody;
