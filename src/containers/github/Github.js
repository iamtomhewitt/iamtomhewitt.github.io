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
			.then(function (jsonData) {
				var fetched_repos = []
				var data = jsonData

				for (var i = 0; i < data.length; i++) {
					var repo = data[i];
					fetched_repos.push(
						{
							name: repo.name,
							url: repo.html_url,
							description: repo.description,
							language: repo.language,
							updatedAt: repo.updated_at,
							imageSource: "https://raw.githubusercontent.com/iamtomhewitt/"+repo.name+"/master/github.png"
						}
					)
				}
				fetched_repos.sort(function (a, b) {
					var dateA = new Date(a.updatedAt), dateB = new Date(b.updatedAt);
					return dateB - dateA;
				});
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
				</tr>
			</thead>
		)

		for (let i = 0; i < this.state.repos.length; i++) {
			rows.push(
					<tr>
						<td style={{width:175}}>{this.state.repos[i].name}</td>
						<td>{this.state.repos[i].description}</td>
						<td>{this.state.repos[i].language}</td>
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
