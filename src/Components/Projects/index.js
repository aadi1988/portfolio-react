import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//renders the projects part in the portfolio page
function Projects(){

    const github = <FontAwesomeIcon icon={faGithub} size="2x"/>
    return (
        <div>
            <h2 className="portfolio-header">Portfolio</h2>
            <div className="portfolio">
            <Container>
              <Row>
                  <Col sm={12} md={12} lg={6} style={{"margin-top": "20px"}}>
                      <div className="example">
                         <img src={require("../../assets/images/Common-capitalism.png").default} alt="link to second project"/>
                         <div className="content"> 
                              <h3><a href="https://aadi1988.github.io/Common-Capitalism">Common Capitalism</a></h3>
                              
                              <a href="https://github.com/aadi1988/Common-Capitalism"><span role="img" aria-label="github">{github}</span></a>
                         </div>
                      </div>
                  
                  </Col>
                  <Col sm={12} md={12} lg={6} style={{"margin-top": "20px"}}>
                      <div className="example">
                         <img src={require("../../assets/images/food-choice.png").default} alt="link to second project"/>
                         <div className="content"> 
                              <h3><a href="https://myfoodchoices.herokuapp.com/">Food Choices</a></h3>
                              <a href="https://github.com/ahmadelgamal/ucb-my-food-choices"><span role="img" aria-label="github">{github}</span></a>
                         </div>
                      </div>
                  </Col>
              </Row>
             <Row>
                <Col xs={12} md={12} lg={6} style={{"margin-top": "20px", "margin-bottom": "20px"}}>
                      <div className="example">
                         <img src={require("../../assets/images/IMG_4176.jpg").default} alt="link to second project"/>
                         <div className="content"> 
                              <h3>Project3</h3>
                              
                         </div>
                      </div></Col>
                
             </Row>    
           </Container>
             
         </div>

        </div>
        
    )
}

export default Projects;