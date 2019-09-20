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
                            language: repo.language
                        }
                    )
                }
                that.setState({ repos: fetched_repos });
            });
    }


    createGrid = () => {
        let tiles = []
        let rows = []

        for (let i = 0; i < this.state.repos.length; i++) {
            rows.push(<Tile key={i} {...this.state.repos[i]} />);
        }

        let groupsOfThree = []
        while (rows.length > 0) {
            groupsOfThree.push(rows.splice(0, 3));
        }

        for (let i = 0; i < groupsOfThree.length; i++) {
            tiles.push(<div key={i} className="centered">{groupsOfThree[i]}</div>)
        }

        return tiles;
    }

    render() {
        if (this.state.repos.length > 0) {
            return (
                <div className="Projects">
                    <h1>Projects</h1>    
                    {this.createGrid()}                
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