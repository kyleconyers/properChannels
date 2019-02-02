import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

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
            <a href="auth/connect/google"><button onClick={this.handleConnectGoogle}>Connect to Google</button></a>
            :
            <div>
                <p>Google ID: {user.google.googleId}</p>
                <a href="#"><button >Unlink from Google</button></a>
                </div>
        }
    }

	render() {
		return (
			<div className="UserProfile">

                <h2>Profile for {this.props.user.local.username}</h2>

                <Container>
                <h3>Personal Info</h3>
                {/* Form for updating user info */}
				<Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="firstName">First Name:</Label>
                        <Input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </FormGroup>
                    {/* <br/> */}
                    <FormGroup>
                        <Label htmlFor="lastName">Last Name:</Label>
                        <Input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </FormGroup>
                    {/* <br/> */}
                    <FormGroup>
                        <Label htmlFor="address">Address:</Label>
                        <Input type="text" name="address" id="address" value={this.state.address} onChange={this.handleChange} />
                    </FormGroup>
                    {/* <br/> */}
                    <Button color="primary" type="submit" >Save</Button>
                </Form>
                </Container>

                <br/>

                <h3>Google Account Info</h3>
                {
                    this.googleConnectSwitch()
                }
			</div>
		)
	}
}

export default UserProfile
