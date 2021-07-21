import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [aboutMeSelected, setAboutMeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(true);
  const [contactMeSelected, setContactMeSelected] = useState(true);
  const [resumeSelected, setResumeSelected] = useState(true);

  return (
    <div>
      <Header aboutMeSelected={aboutMeSelected}
        setAboutMeSelected={setAboutMeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactMeSelected={contactMeSelected}
        setContactMeSelected={setContactMeSelected}
        resumeSelected={resumeSelected} 
        setResumeSelected={setResumeSelected}>
      </Header>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
