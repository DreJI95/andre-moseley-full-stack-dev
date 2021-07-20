import React, { useState, useEffect } from 'react';
import Project from '../Project';


function Navigation(props){

        const [pageSelected,setPageSelected] = useState([
            {AboutMe: true},
            {Portfolio: false},
            {Contact: false},
            {Resume: false}]);

        const setPageToFalse = (selectedPage) => {

            if (selectedPage === "AboutMe") {
                setPageSelected([{AboutMe: true},
                    {Portfolio: false},
                    {Contact: false},
                    {Resume: false}]);
            }
            else if (selectedPage === "Portfolio") {
                setPageSelected([{AboutMe: false},
                    {Portfolio: true},
                    {Contact: false},
                    {Resume: false}]);
            }
            else if (selectedPage === "Contact") {
                setPageSelected([{AboutMe: false},
                    {Portfolio: false},
                    {Contact: true},
                    {Resume: false}]);
            }
            else if (selectedPage === "Resume") {
                setPageSelected([{AboutMe: false},
                    {Portfolio: false},
                    {Contact: false},
                    {Resume: true}]);
            }
        }


    return (
        <div>
         <nav>
            <ul>
                <li> <button type="click" onClick={() => { setPageToFalse("AboutMe");}}>AboutMe </button></li>
                <li> <button type="click" onClick={() => { setPageToFalse("Portfolio");}}>Portfolio </button></li>
                <li> <button type="click" onClick={() => { setPageToFalse("Contact");}}>Contact </button></li>
                <li> <button type="click" onClick={() => { setPageToFalse("Resume");}}> Resume </button></li>
            </ul>
         </nav>
         <main>
            {pageSelected[0].AboutMe && (<div>
                <h1 id="about-me-header">About Me</h1>
                <div className="about-me">
                    <img className="about-me-image" src="./assets/images/self-photo.png" alt="Andre Moseley recent photo"/>
                    <article className="about-me-info">
                    I am a quick learner \& demonstrate the ability to overcome challenges for critical deliverable timelines in the software development lifecycle.<br></br> My adaptability, dedication, empathy \& enthusiasm are the key qualities that define me as a team player. <br></br> My in-depth understanding of business products and technology contribute to my success as a Quality Engineer at TD Canada Trust.
                    </article>
                </div>
            </div>)}
            
            {pageSelected[1].Portfolio && (<div>
                <Project></Project>
            </div>)}

            {pageSelected[2].Contact && (<div>
                Future Form
            </div>)}

            {pageSelected[3].Resume && (<div>
                <div className="resume">
                <h2 id="resum-header">Resume</h2>
                <button type="submit" onClick="window.open('./assets/docs/Andre Moseley - Resume.pdf')"> 
                    Download
                </button>
                </div>
            </div>)}
        </main>
        </div>
    )
}

export default Navigation;