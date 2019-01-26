import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import Center from './components/Center'
import CenterBody from './components/CenterBody'
import CenterLinks from './components/CenterLinks'
import LeftSideBar from './components/LeftSideBar'
import NavBar from './components/NavBar'
import Wrapper from './components/Wrapper'
import RightSideBar from './components/RightSideBar'
import Home from './components/Home'
import Profile from './components/Profile'
import Districts from './components/Districts'
import OtherDistricts from './components/OtherDistricts'


// const APIkey = 'kbvtlqxgtqEP4TbguBcbVICEbNTmsBy8f9r4owm6'


// console.log('testAPP.js');


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
							Log In
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							Sign Up
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
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
		// this.generateResultsObject()
	}

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
					user: null
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
		return (
			<div className="App">
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

					{/* <NavBar className="navBar">
							<p>
								navBar
						</p>
						</NavBar> */}


					<LeftSideBar className="leftSideBar">
						<Profile className="profile">
							<Route exact path="/" render={() => <Home user={this.state.user} />} />
							<Header user={this.state.user} />
						</Profile>
						<Districts className="districts" address={this.state.address}>
							<p>
								Districts
							</p>
						</Districts>
						<OtherDistricts className="otherDistricts">
							<p>
								The Other Districts
							</p>
						</OtherDistricts>
					</LeftSideBar>

					<Center className="center">
						<CenterLinks className="centerLinks">
							<p>
								centerLinks
						</p>
						</CenterLinks>

						<CenterBody className="centerBody">
							<p>
								centerBody
						</p>
						</CenterBody>
					</Center>

					<RightSideBar className="rightSideBar">
						<p>
							rightSideBar
						</p>
					</RightSideBar>

				</Wrapper>

			</div>
		)
	}
}

export default App
