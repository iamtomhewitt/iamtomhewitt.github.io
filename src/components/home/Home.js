import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div id="lander">
                    <h1>Hi, I'm Tom!</h1>
                    <div id="profile">
                        <img src={process.env.PUBLIC_URL + '/images/Me.jpg'} alt=""/>
                    </div>
                    <p />
                    <p>I'm currently a software developer at William Hill, working on the software for self service betting terminals. I play drums, a few video games (as well as make my own on Google Play!). And I love a bit of metal.</p>
                    <p>I graduated from Nottingham Trent University with a First Class Honours in Computer Science (Games Technology)</p>
                    <p>My final year project involved creating a virtual reality interactive model of the human heart to assess its usefulness as an alternative learning style for medical students (as compared to 2D diagrams and textbooks).</p>
                </div>
            </div>
        );
    }
}
