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
                            iconStyle={{ background: '#fff', color: '#fff' }}
                            icon={<img className="icon" src="http://www.whiterosecentre.com/wp-content/uploads/2013/09/william-hill-logo-square-500.png"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">William Hill</h4>
                            <p>
                                Working in the Retail Tech department, on a Retail Operational Excellence project. Currently working on betting terminal fixes and in house dashboards for other projects.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="August 2017 - July 2019"
                            iconStyle={{ background: '#fff', color: '#fff' }}
                            icon={<img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/3/32/CGI_logo.svg"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Graduate Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">CGI</h4>
                            <p>
                                Responsible for an entire customer relationship type subsystem, using a variety of tools and software such as Java, SQL, JSP, Perl, Hibernate, VB, Remedy, Crystal Reports.

                                Subsystem compromises of a workflow tool, an in-house website and a reporting tool.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="August 2015 - July 2016"
                            iconStyle={{ background: '#fff', color: '#fff' }}
                            icon={<img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/3/32/CGI_logo.svg"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Analyst Programmer</h3>
                            <h4 className="vertical-timeline-element-subtitle">CGI</h4>
                            <p>
                                Working in the Defence Sector at CGI, as part of an industrial placement year for university.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="September 2014 - July 2015"
                            iconStyle={{ background: '#fff', color: '#fff' }}
                            icon={<img className="icon" src="https://upload.wikimedia.org/wikipedia/en/b/bb/Nottingham_Trent_University_shield.svg"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Student Ambassador</h3>
                            <h4 className="vertical-timeline-element-subtitle">Nottingham Trent University</h4>
                            <p>
                                Personally invited onto the Student Ambassador scheme due to high achievements from first year.
                                Supported first year students in programming sessions and one on one mentoring sessions, as well as helping out and leading groups of potential students at   university open days.
                            </p>
                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>
            </div>
        );
    }
}