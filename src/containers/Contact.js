import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

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

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
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
                        type="submit">Send Message!</Button>
                </form>
            </div>
        );
    }
}
