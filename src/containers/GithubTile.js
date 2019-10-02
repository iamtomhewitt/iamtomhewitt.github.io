import React from "react";
import "./GithubTile.css";

export function Tile(repo) {

    return (    
        <div className="content">
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
                <div className="content-overlay"/>

                <img className="content-image" 
                    src={process.env.PUBLIC_URL + '/images/github/' + repo.name + '.png'} 
                    alt=""
                    onError={(e)=>{e.target.onerror = null; e.target.src=process.env.PUBLIC_URL + '/images/github/default.jpg'}} 
                />

                <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">{repo.name}</h3>
                    <p className="content-text">{repo.description}</p>
                </div>
            </a>
        </div>
    );
}