import React, { Component } from "react";
import "./Projects.css";

export default class Projects extends Component {

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
                            description: repo.description
                        }
                    )
                }
                that.setState({ repos: fetched_repos });
            });
    }

    render() {
        if (this.state.repos.length > 0) {
            return (
                <div className="Projects">
                    <h1>Projects</h1>
                    <ul>
                        {this.state.repos.map(repo => (
                            <li key={repo.name}>{repo.name + " | " + repo.description} </li>
                        ))}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div className="Projects">
                    <h1>Projects</h1>
                    <p>Nothing loaded!</p>
                </div>
            );
        }
    }
}