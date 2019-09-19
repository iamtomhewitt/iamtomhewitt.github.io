import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import "./Experience.css";

export default class Experience extends Component {
    render() {
        var s = {
            "background-color": "#F2F3F4"
        };
        return (
            <div class="Experience">
                <div>
                    <h1 className="vertical-timeline-element-title">Where I've worked</h1>
                    <br></br>
                </div>
                <div style={s}>
                    <VerticalTimeline >
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="July 2019 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">William Hill</h4>
                            <p>
                                Doing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some codingDoing some coding
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="July 2017 - July 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">CGI</h4>
                            <p>
                                Doing some coding
                            </p>
                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>
            </div>
        );
    }
}
