import React from 'react';

import './GithubTile.css';

export default class GithubTile extends React.Component {
	render() {
		var fontSize = {
			fontSize: this.props.fontSize + 'px'
		};

		const { name, language, description, bugs, stars, forks } = this.props;

		return (
			<div className="repo">
				<div className="repoInfo">
					<div className="repoName">{name}</div>
					<div className="repoLanguage">{language}</div>
				</div>
				<div className="description" style={fontSize}>{description}</div>
				<ul className="stats" key={name}>
					<li><span role="img" aria-label="bug">🐛</span>{bugs}</li>
					<li><span role="img" aria-label="star">⭐️</span>{stars}</li>
					<li><span role="img" aria-label="fork and knife">🍴</span>{forks}</li>
				</ul>
			</div>
		)
	}
}