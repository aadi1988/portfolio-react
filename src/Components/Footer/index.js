import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 

function Footer(){
    const github = <FontAwesomeIcon icon={faGithub} size="2x"/>
    const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x"/>
    return (
        
        <footer> 
        <ul className="FooterUl">
            <li className="FooterLi">
              <span role="img" aria-label="github">{github}</span>
            </li>
            <li className="FooterLi">
              <span role="img" aria-label="linkedin">{linkedin}</span>
            </li>
         </ul>
        </footer>
    )
}

export default Footer;
      