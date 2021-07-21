import React from 'react';

function Resume(props){

    return (
        <div className="resume">
            <h2 id="resume-header">Resume</h2>
            <a href={require(`../../assets/docs/Andre Moseley - Resume.pdf`).default} alt="Andre-Moseley-Resume" rel="noreferrer" target="_blank">
                Resume
            </a>
            <article className="cv-info">
                <h2 id="proficiencies-header">Proficiencies</h2>
                <ul>
                    <li>SQL, NoSQL and GraphQL queries</li>
                    <li>MongoDB, Sequelize data modeling</li>
                    <li>JavaScript, Python, Java, C#, UNIX programming languages</li>
                    <li>React, Bootstrap, HTML+CSS scripting</li>
                    <li>MERN full stack applications</li>
                    <li>MVC full stack applications</li>
                    <li>Third-Party & Server side APIs with PostMan</li>
                </ul>
            </article>
        </div>
    )
}

export default Resume;