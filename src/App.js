import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Project from './components/Project';

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
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
