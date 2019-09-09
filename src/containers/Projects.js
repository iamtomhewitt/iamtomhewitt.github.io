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
                    <br></br>
                    <table>
                        <thead>
                            <tr>
                                <td><b>Repo</b></td>
                                <td><b>Description</b></td>
                                <td><b>URL</b></td>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.repos.map(repo => (
                            <tr>
                                <td>{repo.name}</td>
                                <td>{repo.description}</td>
                                <td><a href={repo.url}>{repo.url}</a></td>
                            </tr>
                        ))}</tbody>
                    </table>
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