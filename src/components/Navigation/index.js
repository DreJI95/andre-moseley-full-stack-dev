import React from 'react';
import About from '../About';
import Resume from '../Resume';
import Contact from '../Contact';
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
               <About> </About>
            </div>)}
            
            {!portfolioSelected && (<div>
                <Project></Project>
            </div>)}

            {!contactMeSelected && (<div>
                <Contact></Contact>
            </div>)}

            {!resumeSelected && (<div>
               <Resume></Resume>
            </div>)}
        </main>
        </div>
    )
}

export default Navigation;