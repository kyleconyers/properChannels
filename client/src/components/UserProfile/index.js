import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class UserProfile extends Component {
	constructor() {
		super()
		this.state = {
            // TODO: Get address to populate from user info in database
			address: "DEFAULT ADDRESS"
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

    }
    
    // Handle connecting account to Google
    handleConnectGoogle = event => {
        // TODO: Handle connecting account to Google
    }

	render() {
		return (
			<div className="UserProfile">

                {/* Form for updating user info */}
				<form onSubmit={this.handleSubmit}>
                    <label htmlFor="address">Address:</label>
                    <input type="text" name="address" id="address" value={this.state.address} onChange={this.handleChange} />
                    <input type="submit" value="Save" />
                </form>

                {/* TODO: Replace with Google-provided image */}
                {/* TODO: Create button to de-link account from Google */}
                <button onClick={this.handleConnectGoogle}>Connect to Google</button>
			</div>
		)
	}
}

export default UserProfile
