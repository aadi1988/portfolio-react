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
                  <Col sm={12} md={12} lg={6}>1 of 2</Col>
                  <Col sm={12} md={12} lg={6}>2 of 2</Col>
              </Row>
             <Row>
                <Col xs={12} md={12}>1 of 3</Col>
                <Col xs={12} md={12}>2 of 3</Col>
                <Col xs={12} md={12}>3 of 3</Col>
             </Row>    
           </Container>
             
         </div>

        </div>
        
    )
}

export default Projects;