import React from "react";
import { Route, Link } from 'react-router-dom';
import Header from '../Header'
import Home from '../Home'

// import "./profile.css"

const MiniProfile = props => {
    const {user} = props;
    return (
        <div className="profile">
            <Route exact path="/" render={() => <Home user={user} />} />
            <Header user={user} />
        </div>
    )
}
// <div className="profile">{props.children}</div>

export default MiniProfile;