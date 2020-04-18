import React, { Component } from "react";
import Tile from "./Tile";

import "./Experience.css";

export default class Experience extends Component {
	render() {
		return (
			<>
				<h1 id="title">I've worked at</h1>
				<div id="container">
					<Tile
						jobTitle="Developer"
						company="William Hill"
						description="Working in Retail, currently working on the software for self service betting terminals."
						time="Jul 2019 - Present"
						fontSize="16"
					/>

					<Tile
						jobTitle="Graduate Developer"
						company="CGI"
						description="Responsible for an entire customer relationship type subsystem, using a variety of tools and software such as Java, SQL, JSP, Perl, Hibernate, VB, Remedy, Crystal Reports. Subsystem compromises of a workflow tool, an in-house website and a reporting tool."
						time="Aug 2017 - Jul 2019"
						fontSize="14"
					/>

					<Tile
						jobTitle="Analyst Programmer"
						company="CGI"
						description="Working in the Defence Sector at CGI, as part of an industrial placement year for university."
						time="Aug 2015 - Jul 2016"
						fontSize="16"
					/>

					<Tile
						jobTitle="Student Ambassador"
						company="Nottingham Trent University"
						description="Personally invited onto the Student Ambassador scheme due to high achievements from first year.
					Supported first year students in programming sessions and one on one mentoring sessions, as well as helping out and leading groups of potential students at university open days."
						time="Sep 2014 - Jun 2015"
						fontSize="14"
					/>
				</div>
			</>
		);
	}
}