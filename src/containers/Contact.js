import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
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
            <div className="Contact">
                <h1>Contact</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="firstName">
                        <ControlLabel>First Name*</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="lastName">
                        <ControlLabel>Last Name*</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <ControlLabel>Email*</ControlLabel>
                        <FormControl
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="message">
                        <ControlLabel>Message*</ControlLabel>
                        <FormControl
                            autoFocus
                            componentClass="textarea"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <Button
                        block
                        bsSize="large"
                        bsStyle="primary"
                        disabled={!this.validateForm()}
                        type="submit">Send Message!
                    </Button>
                </form>
            </div>
        );
    }
}
