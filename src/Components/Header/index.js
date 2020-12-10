import React from 'react'
import Nav from '../Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons' 
function Header(){
     const laptop = <FontAwesomeIcon icon={faLaptop} size="1.5x"/>
     return(
        <div>
        <header>
          <h1 style={{color: "white"}}>{laptop}Aaditi Pai</h1>   
       
          <Nav />
        </header>
      </div>   
     );
}

export default Header;