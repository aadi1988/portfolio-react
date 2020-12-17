import React from 'react'
import About from '../../Components/AboutMe'
import Contact from '../../Components/Contact'
import Resume from '../../Components/Resume'
import Projects from '../../Components/Projects'

//renders portfolio component
function Portfolio(props){
    const {
        currentCategory
    } = props;
    //renders pages when a category is clicked in the navbar
    switch(currentCategory) {
        case 'About Me':
          return <About/>;
        case 'Contact Me':
          return <Contact/>;
        case 'Resume':
          return <Resume/>
        case 'Portfolio':
          return <Projects/>
        default:
          break;
    }
    return (
        
        <div>
            {this.renderSwitch(currentCategory)}
            
        </div>
       
    )
}

export default Portfolio;