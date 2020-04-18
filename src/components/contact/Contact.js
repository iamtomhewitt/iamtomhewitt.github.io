import React, { Component } from "react";
import { FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import * as emailjs from "emailjs-com"

import "./Contact.css";

export default class Contact extends Component {

	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			message: ""
		}
	}

	validateForm() {
		return (this.state.firstName.length > 0 &&
			this.state.lastName.length > 0 &&
			this.state.email.length > 0 &&
			this.state.message.length > 0);
	}

	clearForm() {
		this.setState({
			firstName: "",
			lastName: "",
			email: "",
			message: ""
		});
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();

		let parameters = {
			from_name: this.state.email,
			to_name: "tommhewitt@gmail.com",
			subject: "New Website Message from " + this.state.firstName + " " + this.state.lastName,
			message_html: this.state.message
		}

		emailjs.send(
			'gmail',
			'template_bAqyBvgM',
			parameters,
			'user_D5T3rATIktVUiqjTa1fE0'
		)

		this.clearForm();
	}

	render() {
		return (
			<>
				<h1 id="title">Contact</h1>
				<div id="container">
					<form onSubmit={this.handleSubmit}>
						<FormGroup controlId="firstName">
							<FormLabel>First Name*</FormLabel>
							<FormControl
								type="text"
								value={this.state.firstName}
								onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup controlId="lastName">
							<FormLabel>Last Name*</FormLabel>
							<FormControl
								type="text"
								value={this.state.lastName}
								onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup controlId="email">
							<FormLabel>Email*</FormLabel>
							<FormControl
								type="email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup controlId="message">
							<FormLabel>Message*</FormLabel>
							<FormControl
								autoFocus
								value={this.state.message}
								onChange={this.handleChange}
							/>
						</FormGroup>

						<Button
							block
							variant="primary"
							disabled={!this.validateForm()}
							type="submit">Send Message!
                    	</Button>
					</form>
				</div>
			</>
		);
	}
}
