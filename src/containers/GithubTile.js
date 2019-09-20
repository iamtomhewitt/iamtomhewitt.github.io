import React from "react";
import defaultImage from '../images/github/default.jpg';
import "./GithubTile.css";

export function Tile(repo) {
    let imageToUse;

    if (repo.image == null){
        imageToUse = defaultImage
    }
    else {
        // imageToUse = '../images/image.jpg';
    }

    return (    
        <div className="content">
            <a href="www.google.com" target="_blank">
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src={imageToUse} />
                <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">{repo.name}</h3>
                    <p className="content-text">{repo.description}</p>
                </div>
            </a>
        </div>
    );
}