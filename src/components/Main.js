import React, { useState } from 'react';
import AboutMe from './AboutMe.js'
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Resume from './Resume.js';

function Main(props) {

    if(props.currentPage==="About") {
        return (
            <>
                <AboutMe />
            </>
          );
    } else if(props.currentPage==="Portfolio") {
        return (
            <>
                <Portfolio />
            </>
          );
    } else if(props.currentPage==="Contact") {
        return (
            <>
                <Contact />
            </>
        )
    } else {
        return (
            <>
                <Resume />
            </>
        )
    }
  
}

export default Main;
