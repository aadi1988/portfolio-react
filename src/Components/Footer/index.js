import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 

//function to render footer component
function Footer(){
    //github and linkedin icons
    const github = <FontAwesomeIcon icon={faGithub} size="2x"/>
    const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x"/>
    return (
        
        <footer> 
        <ul className="FooterUl">
            <li className="FooterLi">
                <a href="https://github.com/aadi1988"><span role="img" aria-label="github">{github}</span></a>
            </li>
            <li className="FooterLi">
                <a href="https://www.linkedin.com/in/aaditi-pai-91a58525/"><span role="img" aria-label="linkedin">{linkedin}</span></a>
            </li>
         </ul>
        </footer>
    )
}

export default Footer;
      