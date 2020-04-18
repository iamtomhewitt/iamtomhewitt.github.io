import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';

export default class Footer extends Component {
	render() {
		return (
			<div align="center">
				<hr />
				<SocialIcon url="http://github.com/iamtomhewitt" /><span>&nbsp;&nbsp;</span>
				<SocialIcon url="https://www.linkedin.com/in/thomas-hewitt-ab7724a8/" /><span>&nbsp;&nbsp;</span>
				<SocialIcon url="http://instagram.com/iamtomhewitt" /><span>&nbsp;&nbsp;</span>
				<SocialIcon url="https://www.youtube.com/channel/UCKP2LhsWT2UdXfUgY_yb8iw?" /><span>&nbsp;&nbsp;</span>
				<SocialIcon url="https://stackoverflow.com/users/3002268/tom?tab=profile" /> <span>&nbsp;&nbsp;</span>
				<br />
			</div>
		);
	}
}