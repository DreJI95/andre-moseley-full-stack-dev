import React from 'react';

function Project(props){


    return (
        <div className="projects-section">
            <h1 id="projects-header">Projects</h1>
           <div className="project-img project-1">
                <a href="https://github.com/ITJagraj/Tutor-app" alt="Tutor-app" target="_blank"><img src="./assets/images/CoeusShare-preview.PNG"/></a>
                <div className="project-text">Project: CoeusShare Tutor App</div>
           </div>

            <div className="project-img project-2">
                <a href="https://jadejhagru.github.io/fitness-application/" alt="Obsidiflex-Fitness-App" target="_blank"><img src="./assets/images/Obsidiflex-preview.PNG"/></a>
                <div className="project-text">Group Project: Obsidiflex</div>
            </div>

            <div className="project-img project-3">
                  <a href="https://dreji95.github.io/Work-Day-Scheduler/" alt="Work-Day-Scheduler" target="_blank"><img src="./assets/images/Work-Day-Scheduler-preview.PNG"/></a>
                  <div className="project-text">Project: Work Day Scheduler</div>
            </div>

            <div className="project-img project-4">
                <a href="https://dreji95.github.io/Code-Quiz-Challenge/" alt="Code-Quiz-Challenge" target="_blank"><img src="./assets/images/Code-Quiz-Challenge-preview.PNG"/></a>
                <div className="project-text">Project: Code Quiz Challenge</div>
            </div>

            <div className="project-img project-5">
                <a href="https://dreji95.github.io/Password-Generator/" alt="Password-Generator" target="_blank"><img src="./assets/images/Password-Generator-preview.PNG"/></a>
                <div className="project-text">Project: Password Generator</div>
            </div>
        </div>
    )
}

export default Project;