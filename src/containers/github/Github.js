import React, { Component } from "react";

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

	createRows = () => {
		let rows = []

		rows.push(
			<thead>
				<tr>
					<td>Name</td>
					<td>Description</td>
					<td>Language</td>
					<td>Issues</td>
					<td>Forks</td>
					<td>Stars</td>
				</tr>
			</thead>
		)

		for (let i = 0; i < this.state.repos.length; i++) {
			rows.push(
				<tr>
					<td style={{width:175}}>{this.state.repos[i].name}</td>
					<td style={{width:600}}>{this.state.repos[i].description}</td>
					<td>{this.state.repos[i].language}</td>
					<td>{this.state.repos[i].issues}</td>
					<td>{this.state.repos[i].forks}</td>
					<td>{this.state.repos[i].stars}</td>
				</tr>)
		}
		return rows;
	}

	render() {
		if (this.state.repos.length > 0) {
			return (
				<div className="Github">
					<h1>I've built</h1>
                    <table id="repos-table">
						{this.createRows()}
					</table>
                </div>
            );
        }
        else {
            return (
                <div className="Github">
                    <h1>I've built</h1>
					<p>No repos found :-(</p>
				</div>
			);
		}
	}
}
