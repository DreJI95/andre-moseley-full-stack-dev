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
            <h1 id="projects-header">Projects</h1>
            <div className="projects-section">
                <container class="projects-even-and-odd">
                { projects.map(project =>
                    <div className="project-img project-" key={`${project.projectImage}-id`}>
                            <img className="project-img" src={require(`../../assets/images/${project.projectImage}.PNG`).default} alt={`${project.projectName}`}/>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a className="project-text" href={project.projectLink} alt={project.projectName} rel="noreferrer" target="_blank">{project.projectName}</a>
                            <br></br>
                            <br></br>
                            <a className="project-text" href={project.github} alt={`${project.projectName} Github repository`} rel="noreferrer" target="_blank">GitHub repository</a>
                    </div>
                    )
                }
                </container>
            </div>
        </div>
    )
}

export default Project;