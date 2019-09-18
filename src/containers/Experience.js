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
            <div>
                <div>
                    <h1>Where I've worked</h1>
                </div>
                <div style={s}>
                    <VerticalTimeline >
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2019 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">William Hill</h4>
                            <p>
                                Doing some coding
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2018 - 2019"
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
