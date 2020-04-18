import React from 'react';

import './Tile.css';

export default class Tile extends React.Component {
	render() {
		var fontSize = {
			fontSize: this.props.fontSize + 'px'
		};
		return (
			<div id="tile">
				<div id="jobTitle">{this.props.jobTitle}</div>
				<div id="company">{this.props.company}</div>
				<div id="time">{this.props.time}</div>
				<div id="description" style={fontSize}>{this.props.description}</div>
			</div>
		)
	}
}