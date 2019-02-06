import React from "react";
import { Route, Link } from 'react-router-dom'
// import "./navBar.css"

const NavBar = props => <div className="navBar">{props.children}</div>


const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
					<li className="nav-item">
						
							Proper Channels
						
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>

					<li className="nav-item">
						
							Proper Channels
						
					</li>
				</ul>
			</nav>
		)
	}
}

export default NavBar;