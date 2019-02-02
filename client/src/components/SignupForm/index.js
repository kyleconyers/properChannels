import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
					if (!response.data.error) {
						console.log('SUCCESSFUL LOGIN')
						this.setState({
							redirectTo: '/login'
						})
					} else {
						console.log('Error adding user to database:')
						console.log(response.data.error)
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
			<Container>
				<Form className="SignupForm">
					<h2>Register with Proper Channels</h2>
					
					<Row>
						<Col>
							<FormGroup>
								<Label htmlFor="username">Username: </Label>
								<Input
									type="text"
									name="username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</FormGroup>
						</Col>
						<Col/>
					</Row>
					
					<Row>
						<Col>
							<FormGroup>
								<Label htmlFor="password">Password: </Label>
								<Input
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</FormGroup>
						</Col>
						
						<Col>
							<FormGroup>
								
								<Label htmlFor="confirmPassword">Confirm Password: </Label>
								<Input
									type="password"
									name="confirmPassword"
									value={this.state.confirmPassword}
									onChange={this.handleChange}
								/>
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col>
							<FormGroup>
								<Label htmlFor="address">Address: </Label>
								<Input
									type="text"
									name="address"
									value={this.state.address}
									onChange={this.handleChange}
								/>
							</FormGroup>
						</Col>
					</Row>

					<Button color="primary" onClick={this.handleSubmit}>Sign up</Button>
				</Form>
			</Container>
		)
	}
}

export default SignupForm
