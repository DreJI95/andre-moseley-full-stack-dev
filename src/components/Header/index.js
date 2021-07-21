import React from 'react';
import Navigation from '../Navigation';

function Header(props){
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
        <header>
            <h1>
            <a href="/">Andre Moseley</a>
            </h1>
            <Navigation aboutMeSelected={aboutMeSelected}
        setAboutMeSelected={setAboutMeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactMeSelected={contactMeSelected}
        setContactMeSelected={setContactMeSelected}
        resumeSelected={resumeSelected} 
        setResumeSelected={setResumeSelected}> </Navigation>
        </header>
    )
}

export default Header;