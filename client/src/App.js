import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import Center from './components/Center'
import CenterBody from './components/CenterBody'
import CenterLinks from './components/CenterLinks'
import LeftSideBar from './components/LeftSideBar'
import NavBar from './components/NavBar'
import Wrapper from './components/Wrapper'
import RightSideBar from './components/RightSideBar'
import UserProfile from './components/UserProfile'
import committees from "./committees.json";
import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import TwitterRoute from "./components/TwitterRoute";



// const APIkey = 'kbvtlqxgtqEP4TbguBcbVICEbNTmsBy8f9r4owm6'


// console.log('testAPP.js');


const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							<h5>Home</h5>
						</Link>
					</li>
					<li>
						<Link to="/profile" className="nav-link">
							<h5>Profile</h5>
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							<h5>Log Out</h5>
						</Link>
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
							<h5>Home</h5>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							<h5>Log In</h5>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							<h5>Sign Up</h5>
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		var usState = null;
		if (window.location.href.indexOf("forum")) {
			usState = window.location.href.substring(window.location.href.indexOf("forum")+6, window.location.href.indexOf("forum")+8);
		}

		this.state = {
			loggedIn: false,
			user: null,
			loaded: false,
			state: usState,
			current_twitter_focus: "whitehouse"
		}
		this._logout = this._logout.bind(this);
		this._login = this._login.bind(this);
		this.setNewValue = this.setNewValue.bind(this);
		this.changeTwitterFocus = this.changeTwitterFocus.bind(this);
	}

	changeTwitterFocus(activeTwitterName) {
		
		console.log("before this setstate")
		this.setState ({
			current_twitter_focus: activeTwitterName
		})
		//window.document.getElementById("twitter-widget-0").location.reload(true);
		URL = "https://twitter.com/" + this.state.current_twitter_focus + "?ref_src=twsrc%5Etfw";
		console.log("URL: " + URL);
		// document.getElementById('twitter-widget-0').contentWindow.location.href = URL;
	}


	setNewValue(newValue) {
		console.log('this is the State code:' + newValue);
		this.setState ({
		  state: newValue
		},
		() => {
			console.log("this.state.state:");
			console.log(this.state.state);
			window.location.href = "/forum/"+this.state.state;
		});
		
		
	  }

	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user,
					loaded: true
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null,
					loaded: true
				})
			}
		})
		// this.generateResultsObject()
	}

	// callbackHandlerFunction = (clickStatus) => {
	// 	this.setState({
	// 		 isClicked: clickStatus
	// 	});
	// }



	// generateResultsObject(){
	// 	axios({
	// 		method: 'get',
	// 		baseURL: 'https://api.propublica.org/congress/v1/116/senate/members.json',
	// 		headers: {'X-API-Key': 'kbvtlqxgtqEP4TbguBcbVICEbNTmsBy8f9r4owm6'}
	// 	  }).then(res => {
	// 		// do something with data
	// 		console.log('api response: ', res.data)
	// 	  }).catch(err => console.log(err))
	// 	}



	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null,
					state: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {

		const {current_twitter_focus} = this.state
		console.log("PASSEDINTO TWITTER", current_twitter_focus)

		return (
			<div className="App">
				{/* {<Districts handleClickInParent={this.callbackHandlerFunction} /> } */}

				{/* <h1>This is the main App component</h1> */}
				{/* <Header user={this.state.user} /> */}
				{/* LINKS to our different 'pages' */}
				{/* <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} /> */}
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				{/* <Route exact path="/" render={() => <Home user={this.state.user} />} /> */}
				{/* <Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/signup" component={SignupForm} /> */}
				{/* <LoginForm _login={this._login} /> */}


				{/* <div className="content-layout">
					<div className ="left-sideBar">
					left
					
					</div>
					
					<div className="center-content">
					center
					</div>
					
					<div className="right-sideBar">
					right
					</div>	
				</div> */}

				{/* <Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/signup" component={SignupForm} /> */}

				<NavBar className="navBar">

					<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />

					{/* <Route
						exact
						path="/login"
						render={() =>
							<LoginForm
								_login={this._login}
								_googleSignin={this._googleSignin}
							/>}
					/>
					<Route exact path="/signup" component={SignupForm} /> */}

				</NavBar>



				<Wrapper className="wrapper">


					<LeftSideBar 
						className="leftSideBar" 
						user = {this.state.user}
						usState = {this.state.state}
						setNewValue = {this.setNewValue}
						changeTwitterFn = {this.changeTwitterFocus}
					/>

					<Center className="center">
						<CenterLinks className="centerLinks">
							<p>
								centerLinks
						</p>
						</CenterLinks>

						<CenterBody user={this.state.user} className="centerBody">

							<Route
								exact
								path="/login"
								render={() =>
									<LoginForm
										_login={this._login}
										_googleSignin={this._googleSignin}
									/>}
							/>
							<Route exact path="/signup" component={SignupForm} />

							<ProtectedRoute
								exact path="/profile"
								component={UserProfile}
								auth={this.state.loggedIn}
								loaded={this.state.loaded}
								user={this.state.user}
							/>



						</CenterBody>
					</Center>
					
					<RightSideBar className="rightSideBar">
						{/* <a className="twitter-timeline" data-width="500" href={"https://twitter.com/" + current_twitter_focus + "?ref_src=twsrc%5Etfw"}>Tweets!</a>} */}
						
						{/* <Route path="/" render={() => 
							<TwitterRout handle={current_twitter_focus} > } >
							</ TwitterRout> 
						/>  */}
						
						{/* <Route path="/" render={() =>
						}/> */}
							<TwitterRoute handle={this.state.current_twitter_focus}/> 
						
						
						
						
						
					</RightSideBar>
					{/* remove component from dom, then replace again */}
				</Wrapper>

			</div>





		)
	}
}

export default App
