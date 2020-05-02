import React, { Component } from "react";
import GithubTile from './GithubTile';
import "./Github.css";

export default class Github extends Component {

	constructor() {
		super();
		this.state = {
			repos: []
		};
	}

	componentDidMount() {
		const that = this;
		fetch("https://api.github.com/users/iamtomhewitt/repos")
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				var fetched_repos = []

				for (var i = 0; i < data.length; i++) {
					var repo = data[i];
					fetched_repos.push(
						{
							name: repo.name,
							url: repo.html_url,
							description: repo.description,
							language: repo.language,
							forks: repo.forks_count,
							issues: repo.open_issues_count,
							stars: repo.stargazers_count
						}
					)
				}

				that.setState({ repos: fetched_repos });
			});
	}

	render() {
		if (this.state.repos.length > 0) {
			return (
				<div>
					<h1>I've built</h1>

					<div className="reposContainer">
						{this.state.repos.map((repo) => {
							return <GithubTile
								name={repo.name}
								language={repo.language}
								description={repo.description}
								bugs={repo.issues}
								stars={repo.stars}
								forks={repo.forks}
								url={repo.url}
							/>
						})}
					</div>
				</div>
			);
		}
		else {
			return (
				<div className="noRepos">
					<h1>I've built</h1>
					<p>No repos found <span role="img" aria-label="crying face">😢</span></p>
				</div>
			);
		}
	}
}
