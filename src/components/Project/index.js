import React, { useState }  from 'react';

function Project(props){

const [projects] = useState([
    {
        projectName: 'Obsidiflex',
        projectLink: 'https://jadejhagru.github.io/fitness-application/',
        github: 'https://github.com/jadejhagru/fitness-application',
        projectImage: 'Obsidiflex-preview'
    },
    {
        projectName: 'CoeusShare',
        projectLink: 'https://github.com/ITJagraj/Tutor-app',
        github: 'https://github.com/ITJagraj/Tutor-app',
        projectImage: 'CoeusShare-preview'
    },
    {
        projectName: 'Note Taker',
        projectLink: 'https://note-taker-dreji95.herokuapp.com/',
        github: 'https://github.com/DreJI95/note-taker/blob/main/README.md',
        projectImage: 'Note-Taker-preview'
    },
    {
        projectName: 'Team Builder',
        projectLink: '../../assets/docs/index.html',
        github: 'https://github.com/DreJI95/team-buildify',
        projectImage: 'Team-Builder-preview'
    },
    {
        projectName: 'Password Generator',
        projectLink: 'https://dreji95.github.io/Password-Generator/',
        github: 'https://github.com/DreJI95/password-generator',
        projectImage: 'Password-Generator-preview'
    },
    {
        projectName: 'Weather Dashboard',
        projectLink: 'https://dreji95.github.io/weather-dashboard/',
        github: 'https://github.com/DreJI95/weather-dashboard',
        projectImage: 'Weather-Dashboard-preview'
    },
]);


    return (
        <div>
            <div className="projects-section">
                <h1 id="projects-header">Projects</h1>
             { projects.map(project =>
                <div className="project-img project-" key={`${project.projectImage}-id`}>
                        <div className="project-text">{project.projectName}</div>
                        <a href={project.projectLink} alt={project.projectName} target="_blank"><img src={require(`../../assets/images/${project.projectImage}.PNG`).default} alt={`${project.projectName} image`}/></a>
                        <a className="project-text" href={project.github} alt={`${project.projectName} Github repository`} target="_blank">GitHub repository</a>
                </div>
                )
            }
           </div>
        </div>
    )
}

export default Project;