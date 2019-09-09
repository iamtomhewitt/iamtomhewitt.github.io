import React, { Component } from "react";
import "./Projects.css";

export default class Projects extends Component {

    constructor() {
        super();
        this.state = {
            repos: null
        };
    }
    componentDidMount() {
        var repos = []
        var request = new XMLHttpRequest()

        request.open('GET', 'https://api.github.com/users/iamtomhewitt/repos', true)
        request.onload = function () {
            var data = JSON.parse(this.response)

            var name = '';
            var repo_url = '';
            var repo_description = '';

            for (const [key, value] of Object.entries(data)) {
                name = value['name']
                repo_url = value['html_url']
                repo_description = value['description']

                repos.push(
                    {
                        repo_name: name,
                        url: repo_url,
                        description: repo_description
                    }
                )
            }
        }

        this.setState({
            repos: repos
        });

        request.send()
    }

    render() {
        console.log(this.state.repos);

        return (
            
            <div className="Projects">
                <h1>Projects</h1>
                <p>This is where a table of my projects live. This could be manual, or an API request to my github listing all of my projects in a table.</p>
            </div>
        );
    }
}
