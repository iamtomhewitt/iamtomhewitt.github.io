import React, { Component } from "react";
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

// export default class ImageOverlayZoomer extends Component {

//     render() {

//         return (
//             <div className="ImageOverlayZoomer">
//                 <h1 className="title">Projects</h1>

//                 <div className="centered">
//                     <div className="content">
//                         <a href="www.google.com" target="_blank">
//                             <div className="content-overlay"></div>
//                             <img className="content-image" alt="" src={image} />
//                             <div className="content-details fadeIn-bottom">
//                                 <h3 className="content-title">This is a title</h3>
//                                 <p className="content-text">This is a sddddddhort description</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div className="content">
//                         <a href="www.google.com" target="_blank">
//                             <div className="content-overlay"></div>
//                             <img className="content-image" alt="" src={image} />
//                             <div className="content-details fadeIn-bottom">
//                                 <h3 className="content-title">This is a title</h3>
//                                 <p className="content-text">This is a short description</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div className="content">
//                         <a href="www.google.com" target="_blank">
//                             <div className="content-overlay"></div>
//                             <img className="content-image" alt="" src={image} />
//                             <div className="content-details fadeIn-bottom">
//                                 <h3 className="content-title">This is a title</h3>
//                                 <p className="content-text">This is a short description</p>
//                             </div>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="centered">
//                     <div className="content">
//                         <a href="www.google.com" target="_blank">
//                             <div className="content-overlay"></div>
//                             <img className="content-image" alt="" src={image} />
//                             <div className="content-details fadeIn-bottom">
//                                 <h3 className="content-title">This is a title</h3>
//                                 <p className="content-text">This is a sddddddhort description</p>
//                             </div>
//                         </a>
//                     </div>
//                     <div className="content">
//                         <a href="www.google.com" target="_blank">
//                             <div className="content-overlay"></div>
//                             <img className="content-image" alt="" src={image} />
//                             <div className="content-details fadeIn-bottom">
//                                 <h3 className="content-title">This is a title</h3>
//                                 <p className="content-text">This is a short description</p>
//                             </div>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }