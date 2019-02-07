import React from "react";
import { Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';

// import "./profile.css"

const MiniProfile = props => {
    const {user} = props;
    // return (
    //     <div className="profile">
    //         <Header user={user} />
    //     </div>
    // )
    let Greeting, HomeState

    // If no user, treat as guest
	if ( !user ) {
		Greeting = <p>Hello guest</p>
        HomeState = () => {}
	} else {
        // If user, display user info

        const { state } = user.address;

        // Display user first name or username
        if (user.firstName) {
            Greeting = (
                <p>
                    Welcome back, <strong>{user.firstName}</strong>
                </p>
            )  
        } else if (user.local.username) {
            Greeting = (
                <p>
                    Welcome back, <strong>{user.local.username} </strong>
                </p>
            )
        }

        // Display home state
        HomeState = (
            <div>
                <p>
                    Home State: <strong>{state}</strong>
                </p>
                <Link to={`/forum/${state}`} >
                    <Button>View</Button>
                </Link>
            </div>
        )
    }
	return (
		<div className="MiniProfile">
            {Greeting}
            
            {HomeState}
		</div>
	)
}
// <div className="profile">{props.children}</div>

export default MiniProfile;