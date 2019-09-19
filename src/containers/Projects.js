import React, { Component } from "react";
import "./Projects.css";
import { Tile } from "./GithubTile";

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
                console.log(jsonData)
                var fetched_repos = []
                var data = jsonData

                for (var i = 0; i < data.length; i++) {
                    var repo = data[i];
                    fetched_repos.push(
                        {
                            name: repo.name,
                            url: repo.html_url,
                            description: repo.description,
                            language: repo.language
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
                    <div className="centered">
                        <Tile {...this.state.repos[0]} />
                        <Tile {...this.state.repos[1]} />
                        <Tile {...this.state.repos[2]} />
                    </div>

                    <div className="centered">
                        <Tile {...this.state.repos[3]} />
                        <Tile {...this.state.repos[4]} />
                        <Tile {...this.state.repos[5]} />
                    </div>

                    {/* <h1>Projects</h1>
                    <br></br>
                    <table id="repos-table">
                        <thead>
                            <tr>
                                <td><b>Repo</b></td>
                                <td><b>Description</b></td>
                                <td><b>URL</b></td>
                                <td><b>Main Language</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.repos.map(repo => (
                                <tr key={repo.name}>
                                    <td style={{ width: '20%' }}><i>{repo.name}</i></td>
                                    <td style={{ width: '65%' }}>{repo.description}</td>
                                    <td style={{ width: '10%' }}><a href={repo.url}>{repo.url}</a></td>
                                    <td style={{ width: '5%' }}>{repo.language}</td>
                                </tr>
                            ))}</tbody>
                    </table> */}
                </div>
            );
        }
        else {
            return (
                <div className="Projects">
                    <h1>Projects</h1>
                    <p>No repos found :-(</p>
                </div>
            );
        }
    }
}