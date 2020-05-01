import React from 'react';

import './GithubTile.css';

export default class GithubTile extends React.Component {
	render() {
		var fontSize = {
			fontSize: this.props.fontSize + 'px'
		};

		const { name, language, description } = this.props;

		return (
			<div id="repo">
				<div id="repoInfo">
					<div id="repoName">{name}</div>
					<div id="repoLanguage">{language}</div>
				</div>
				<div id="description" style={fontSize}>{description}</div>
			</div>
		)
	}
}