import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom'
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<Container className="LoginForm">
					<h2>Login</h2>
					<Form onSubmit={this.handleSubmit}>
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
						</Row>

						<Button color="primary" type="submit" /*onClick={this.handleSubmit}*/>Login</Button>
					</Form>
					<a href="/auth/google">
						{/* <GoogleButton /> */}
						<img src={googleButton} alt="sign into Google Button" />
					</a>
				</Container>
			)
		}
	}
}

export default LoginForm
