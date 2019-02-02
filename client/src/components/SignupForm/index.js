import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import SelectUSState from 'react-select-us-states';

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			address: '',
			addrStreet: '',
			addrCity: '',
			addrState: '',
			addrZip: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleUsStateSelect = this.handleUsStateSelect.bind(this);
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
					// address: this.state.address
					address: {
						street: this.state.addrStreet,
						city: this.state.addrCity,
						state: this.state.addrState,
						zipCode: this.state.addrZip
					}
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

	handleUsStateSelect(selectedValue) {
		console.log(selectedValue)
		this.setState({addrState: selectedValue})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<Container>
				<Form className="SignupForm" onSubmit={this.handleSubmit}>
					<h2>Register with Proper Channels</h2>
					
					<Row>
						<Col>
							<FormGroup>
								<Label htmlFor="username">Username: </Label>
								<Input
									type="text"
									id="username"
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
									id="password"
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
									id="confirmPassword"
									name="confirmPassword"
									value={this.state.confirmPassword}
									onChange={this.handleChange}
								/>
							</FormGroup>
						</Col>
					</Row>

					{/* <Row>
						<Col>
							<FormGroup>
								<Label htmlFor="address">Address: </Label>
								<Input
									type="text"
									id="address"
									name="address"
									value={this.state.address}
									onChange={this.handleChange}
								/>
							</FormGroup>
						</Col>
					</Row> */}
					
					<Row>
						<Col />
						<Col xs="9">
							<FormGroup>
								<Label htmlFor="addrStreet">Street Address</Label>
								<Input 
									type="text"
									id="addrStreet"
									name="addrStreet"
									value={this.state.addrStreet}
									onChange={this.handleChange}
								/>
							</FormGroup>
						</Col>
						<Col />
					</Row>
					
					<Row>
						<Col />

						<Col xs="4">
							<FormGroup>
								<Label htmlFor="addrCity">City</Label>
								<Input 
									type="text"
									id="addrCity"
									name="addrCity"
									value={this.state.addrCity}
									onChange={this.handleChange}
								/>
							</FormGroup>
						</Col>

						<Col xs="3">
							<FormGroup>
								<Label htmlFor="addrState">State</Label>
								<SelectUSState id="addrState" name="addrState" className="form-control" onChange={this.handleUsStateSelect} />
							</FormGroup>
						</Col>

						<Col xs="2">
							<FormGroup>
								<Label htmlFor="addrZip">Zip Code</Label>
								<Input
									type="text"
									id="addrZip"
									name="addrZip"
									value={this.state.addrZip}
									onChange={this.handleChange}
								/>
							</FormGroup>
						</Col>

						<Col />
					</Row>

					<Button type="submit" color="primary" >Sign up</Button>
				</Form>
			</Container>
		)
	}
}

export default SignupForm
