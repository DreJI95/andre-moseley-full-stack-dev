import React, {useState} from 'react';

function Resume(props){

    const proficiencies = useState({
        frontEndProficiencies: [
            "React", "Bootstrap", "HTML+CSS", "JQuery",
            "GitHub CLI proficiency",
            "Heroku apps",
            "NodeJS apps",
            "HandleBarsJs"
    ],
        backEndProficiencies:[
            "SQL queries & data modeling", "NoSQL data modeling","GraphQL queries and mutations",
            "MongoDB modeling & Mongoose queries", "Sequelize modeling",
            "ExpressJS, bcrypt & session token authentication",
            "Third-Party & Server side APIs with PostMan"
        ],
        qualityAssurance:[
            "JestJS unit testing", "Test strategizing and planning", "JIRA & Confluence proficiency", "Defect debugging"
        ],
        other: ["JavaScript", "Python", "Java", "C#", "UNIX", "Excel macros", "Selenium framework automation", "REST API"]
    });

    return (
        <div className="resume">
            <div>
                <h2 id="resume-header">Resume</h2>
                <a href={require(`../../assets/docs/Andre Moseley - Resume.pdf`).default} alt="Andre-Moseley-Resume" rel="noreferrer" target="_blank">
                    Andre Moseley - Resume.pdf
                </a>
            </div>
                <div className="cv-info">
                <div className="title-of-prof">
                        <ul>Front-End skills:
                            {proficiencies[0].frontEndProficiencies.map(proficiency => <li key={`${proficiency}-id`}>{proficiency}</li>)}
                            <br></br>
                            Back-End skills:
                            {proficiencies[0].qualityAssurance.map(proficiency => <li key={`${proficiency}-id`}>{proficiency}</li>)}
                        </ul>
                </div>
                <div className="qa-other-prof">
                        <ul>Quality Assurance skills:
                            {proficiencies[0].backEndProficiencies.map(proficiency => <li key={`${proficiency}-id`}>{proficiency}</li>)}
                            <br></br>
                            Other skills:
                            {proficiencies[0].other.map(proficiency => <li key={`${proficiency}-id`}>{proficiency}</li>)}
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;