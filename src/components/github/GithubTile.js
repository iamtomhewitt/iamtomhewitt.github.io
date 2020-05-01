import React from 'react';

import './GithubTile.css';

export default class GithubTile extends React.Component {
	render() {
		var fontSize = {
			fontSize: this.props.fontSize + 'px'
		};

		const { name, language, description, bugs, stars, forks, url } = this.props;

		return (
			<div className="repo">
				<div>
					<div className="name"><a href={url}>{name}</a></div>
					<div className="language">{language}</div>
				</div>
				<ul className="stats" key={name}>
					<li><span role="img" aria-label="bug">🐛</span>{bugs}</li>
					<li><span role="img" aria-label="star">⭐️</span>{stars}</li>
					<li><span role="img" aria-label="fork and knife">🍴</span>{forks}</li>
				</ul>
				<div className="description" style={fontSize}>{description}</div>
			</div>
		)
	}
}