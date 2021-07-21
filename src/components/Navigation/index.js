import React, { useState, useEffect } from 'react';
import Project from '../Project';


function Navigation(props){
    const{
        aboutMeSelected, 
        setAboutMeSelected, 
        portfolioSelected, 
        setPortfolioSelected, 
        contactMeSelected, 
        setContactMeSelected,
        resumeSelected, 
        setResumeSelected
    } = props

    return (
        <div>
         <nav>
            <ul>
                <li> <a href="#aboutMe" onClick={() => {setAboutMeSelected(false); setPortfolioSelected(true); setContactMeSelected(true); setResumeSelected(true);}}>AboutMe </a></li>
                <li> <a href="#portfolio" onClick={() => {setAboutMeSelected(true); setPortfolioSelected(false); setContactMeSelected(true); setResumeSelected(true);}}>Portfolio </a></li>
                <li> <a href="#contact" onClick={() => {setAboutMeSelected(true); setPortfolioSelected(true); setContactMeSelected(false); setResumeSelected(true);}}>Contact </a></li>
                <li> <a href="#resume" onClick={() => {setAboutMeSelected(true); setPortfolioSelected(true); setContactMeSelected(true); setResumeSelected(false);}}> Resume </a></li>
            </ul>
         </nav>
         <main>
            {!aboutMeSelected && (<div>
                <h1 id="about-me-header">About Me</h1>
                <div className="about-me">
                    <img className="about-me-image" src={require(`../../assets/images/self-photo.PNG`).default} alt='Andre-Moseley-recent-photo'/>
                    <article className="about-me-info">
                    I am a quick learner \& demonstrate the ability to overcome challenges for critical deliverable timelines in the software development lifecycle.<br></br> My adaptability, dedication, empathy \& enthusiasm are the key qualities that define me as a team player. <br></br> My in-depth understanding of business products and technology contribute to my success as a Quality Engineer at TD Canada Trust.
                    </article>
                </div>
            </div>)}
            
            {!portfolioSelected && (<div>
                <Project></Project>
            </div>)}

            {!contactMeSelected && (<div>
                Future Form
            </div>)}

            {!resumeSelected && (<div>
                <div className="resume">
                <h2 id="resum-header">Resume</h2>
                <a href={require(`../../assets/docs/Andre Moseley - Resume.pdf`).default} alt="Andre-Moseley-Resume" target="_blank">
                    Resume
                </a>
                </div>
            </div>)}
        </main>
        </div>
    )
}

export default Navigation;