import React from 'react';

function Navigation(props){
    const{
        setAboutMeSelected, 
        setPortfolioSelected, 
        setContactMeSelected,
        setResumeSelected
    } = props

    return (
        <div>
         <nav>
            <ul>
                <div> <a href="#aboutMe" onClick={() => {setAboutMeSelected(false); setPortfolioSelected(true); setContactMeSelected(true); setResumeSelected(true);}}>AboutMe </a></div>
                <div> <a href="#portfolio" onClick={() => {setAboutMeSelected(true); setPortfolioSelected(false); setContactMeSelected(true); setResumeSelected(true);}}>Portfolio </a></div>
                <div> <a href="#contact" onClick={() => {setAboutMeSelected(true); setPortfolioSelected(true); setContactMeSelected(false); setResumeSelected(true);}}>Contact </a></div>
                <div> <a href="#resume" onClick={() => {setAboutMeSelected(true); setPortfolioSelected(true); setContactMeSelected(true); setResumeSelected(false);}}> Resume </a></div>
            </ul>
         </nav>
        </div>
    )
}

export default Navigation;