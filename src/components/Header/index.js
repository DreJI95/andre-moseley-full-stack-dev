import React from 'react';
import Navigation from '../Navigation';

function Header(props){
    const{

        setAboutMeSelected, 

        setPortfolioSelected, 

        setContactMeSelected,

        setResumeSelected
    } = props

    return (
        <header>
            <h1>
            <a href="/">Andre Moseley</a>
            </h1>
            <Navigation 
        setAboutMeSelected={setAboutMeSelected}
        
        setPortfolioSelected={setPortfolioSelected}
        
        setContactMeSelected={setContactMeSelected}
        
        setResumeSelected={setResumeSelected}> </Navigation>
        </header>
    )
}

export default Header;