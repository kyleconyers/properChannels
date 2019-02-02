import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const borderStyle = {
    border: "1px solid black"
}

class UserProfile extends Component {
	constructor(props) {
        super(props)

        // Set initial state with defaults
		this.state = {
            firstName: "NULL",
            lastName: "NULL",
			address: "NULL"
        }

        // Populate state with user data
        if (props.user) {
            const {firstName, lastName, address} = props.user
            
            if (firstName) this.state.firstName = firstName
            if (lastName) this.state.lastName = lastName
            if (address) this.state.address = address
        }

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
    
    // Handles updating of input entries
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	// Handle submission of form for updating user data
	handleSubmit(event) {
        event.preventDefault()
        
        axios.put('/auth/updateprofile',  {
            address: this.state.address
        }).then(response => {
            console.log(response);
        })

    }
    
    // Handle connecting account to Google
    handleConnectGoogle = event => {
        // TODO: Handle connecting account to Google
    }

    googleConnectSwitch = () => {
        const {user} = this.props
        if (user) {
            return (!(user.google && user.google.googleId))
            ?
            <Col style={borderStyle}>
                <p>Google ID: Not linked</p>
                <a href="auth/connect/google"><Button onClick={this.handleConnectGoogle}>Connect to Google</Button></a>
            </Col>
            :
            <Col style={borderStyle}>
                <p>Google ID: {user.google.googleId}</p>
                <a href="#"><Button color="primary" >Unlink from Google</Button></a>
            </Col>
        }
    }

	render() {
		return (
			<div className="UserProfile">
                <Container>
                    <h2>Profile for {this.props.user.local.username}</h2>
                    
                    <br/>

                    <h3>Personal Info</h3>
                    {/* Form for updating user info */}
                    <Form 
                        style={borderStyle}
                        onSubmit={this.handleSubmit}
                    >
                        <Col>
                            <FormGroup>
                                <Label htmlFor="firstName">First Name:</Label>
                                <Input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        {/* <br/> */}
                        <Col>
                            <FormGroup>
                                <Label htmlFor="lastName">Last Name:</Label>
                                <Input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        {/* <br/> */}
                        <Col>
                            <FormGroup>
                                <Label htmlFor="address">Address:</Label>
                                <Input type="text" name="address" id="address" value={this.state.address} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        {/* <br/> */}
                        <Col>
                            <Button color="primary" type="submit" >Save</Button>
                        </Col>
                    </Form>

                    <br/>

                    <h3>Google Account Info</h3>
                    {
                        this.googleConnectSwitch()
                    }
                    
                </Container>
			</div>
		)
	}
}

export default UserProfile
