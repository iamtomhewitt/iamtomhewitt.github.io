import React, { Component } from "react";
import { Tile } from "./GithubTile";

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
                            description: repo.description,
                            language: repo.language,
                            updatedAt: repo.updated_at
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

    createGrid = () => {
        let grid = []
        let githubTiles = []
        let rows = []
        let itemsPerRow = 4 

        // First create tiles out of all the repos retrieved
        for (let i = 0; i < this.state.repos.length; i++) {
            githubTiles.push(<Tile key={i} {...this.state.repos[i]} />);
        }

        // Split them into groups
        while (githubTiles.length > 0) {
            rows.push(githubTiles.splice(0, itemsPerRow));
        }

        // Now create a div for the groups of three to sit in
        for (let i = 0; i < rows.length; i++) {
            grid.push(<div key={i} className="centered">{rows[i]}</div>)
        }

        return grid;
    }

    render() {
        if (this.state.repos.length > 0) {
            return (
                <div className="Projects">
                    <h1>I've built</h1>
                    {this.createGrid()}
                </div>
            );
        }
        else {
            return (
                <div className="Projects">
                    <h1>I've built</h1>
                    <p>No repos found :-(</p>
                </div>
            );
        }
    }
}