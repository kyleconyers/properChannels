import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			address: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	// Handle submission of signup form
	handleSubmit(event) {
		event.preventDefault()

		// Check that password and confirmPassword are identical
		if (this.state.password === this.state.confirmPassword) {
			// TODO - add error notification for user if non-matching

			// POST signup request
			axios
				.post('/auth/signup', {
					username: this.state.username,
					password: this.state.password,
					address: this.state.address
				})
				// Wait for response to see if signup successful
				.then(response => {
					console.log(response)
					if (!response.data.errmsg) {
						console.log('SUCCESSFUL LOGIN')
						this.setState({
							redirectTo: '/login'
						})
					} else {
						console.log('duplicate')
					}
				})
				.catch(err => {
					console.log("GOOGLE OAUTH ERROR: ", err)
				})
		}
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
				<h1>Signup form</h1>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<label htmlFor="confirmPassword">Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<label htmlFor="address">Address: </label>
				<input
					type="text"
					name="address"
					value={this.state.address}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}

export default SignupForm
