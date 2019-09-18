import React, { Component } from "react";
import "./Experience.css";

export default class Experience extends Component {
    render() {
        return (
            <div className="Experience">
                <h1>Experience</h1>
                <br></br>
                {/* LinkedAPI no longer available, add manually for now */}
                <table id="experience-table">
                    <thead>
                        <tr>
                            <td><b>Title</b></td>
                            <td><b>Where</b></td>
                            <td><b>Date</b></td>
                            <td><b>Doing</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Developer</td>
                            <td>William Hill</td>
                            <td>July 2019</td>
                            <td>Java</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
