import React from 'react';

function About(props){


    return (
        <div className="about-me">
            <h1 id="about-me-header">About Me</h1>
                <img className="about-me-image" src={require(`../../assets/images/self-photo.PNG`).default} alt='Andre-Moseley-recent-photo'/>
                <article className="about-me-info">
                I am a quick learner \& demonstrate the ability to overcome challenges for critical deliverable timelines in the software development lifecycle.<br></br> My adaptability, dedication, empathy \& enthusiasm are the key qualities that define me as a team player. <br></br> My in-depth understanding of business products and technology contribute to my success as a Quality Engineer at TD Canada Trust.
                </article>
        </div>
    )
}

export default About;