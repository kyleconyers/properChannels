import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class UserProfile extends Component {
	constructor() {
		super()
		this.state = {
			address: ""
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

	}

	render() {
		return (
			<div className="UserProfile">
				<form>
                    <label forName="address">Address:</label>
                    <input name="address" />
                </form>

                <button >Connect to Google</button>
			</div>
		)
	}
}

export default UserProfile
