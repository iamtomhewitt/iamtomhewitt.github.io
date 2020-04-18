import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.css'

export default class Navigation extends Component {
	render() {
		return (
			<>
				<Navbar bg="primary" variant="dark">
					<Navbar.Brand href="/">Home</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#/experience">Experience</Nav.Link>
						<Nav.Link href="#/github">Github</Nav.Link>
						<Nav.Link href="#/contact">Contact</Nav.Link>
					</Nav>
				</Navbar>
			</>
		)
	}
}