import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Projects(){
    return (
        <div>
            <h2 className="portfolio-header">Portfolio</h2>
            <div className="portfolio">
            <Container>
              <Row>
                  <Col sm={12} md={12} lg={6} style={{"margin-top": "20px"}}>
                      <div className="example">
                         <img src={require("../../assets/images/food-choice.png").default} alt="link to second project"/>
                         <div className="content"> 
                              <h3>Project2</h3>
                              <p>Food Choices</p>
                         </div>
                      </div>
                  
                  </Col>
                  <Col sm={12} md={12} lg={6} style={{"margin-top": "20px"}}>
                      <div className="example">
                         <img src={require("../../assets/images/food-choice.png").default} alt="link to second project"/>
                         <div className="content"> 
                              <h3>Project2</h3>
                              <p>Food Choices</p>
                         </div>
                      </div>
                  </Col>
              </Row>
             <Row>
                <Col xs={12} md={12} lg={6} style={{"margin-top": "20px"}}>
                      <div className="example">
                         <img src={require("../../assets/images/food-choice.png").default} alt="link to second project"/>
                         <div className="content"> 
                              <h3>Project2</h3>
                              <p>Food Choices</p>
                         </div>
                      </div></Col>
                <Col xs={12} md={12} lg={6} style={{"margin-top": "20px"}}>
                      <div className="example">
                         <img src={require("../../assets/images/food-choice.png").default} alt="link to second project"/>
                         <div className="content"> 
                              <h3>Project2</h3>
                              <p>Food Choices</p>
                         </div>
                      </div></Col>
                
             </Row>    
           </Container>
             
         </div>

        </div>
        
    )
}

export default Projects;