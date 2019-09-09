import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>Hi, I'm Tom!</h1>
                    <p>I'm currently a software developer at CGI, working in the defence sector.</p>
                    <p>Nottingham Trent University graduate with a First Class Honours in Computer Science (Games Technology). My final year project involved creating a virtual reality interactive model of the human heart to assess its usefulness as an alternative learning style for medical students (as compared to 2D diagrams and textbooks).</p>
                    <p>​I play drums, games, and like to learn about new software technologies. And love a bit of metal.</p>
                </div>
            </div>
        );
    }
}
