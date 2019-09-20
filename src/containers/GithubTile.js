import React from "react";
import image from '../images/image.jpg';
import "./GithubTile.css";

export function Tile(repos) {
    return (
        <div className="content">
            <a href="www.google.com" target="_blank">
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src={image} />
                <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">{repos.name}</h3>
                    <p className="content-text">{repos.description}</p>
                </div>
            </a>
        </div>
    );
}