import React from 'react'
import DownloadLink from "react-download-link";

//renders resume
function Resume(){
    return (
        <div>
              <h2>Resume</h2>
              <div className="resume">
              <p>
                Download my <DownloadLink  label="Resume" filename="myfile.txt" exportFile={() => "My cached data"}/> here.
              </p>
              <h3>
                  Front End proficiencies
              </h3>
              <ul>
                  <li>
                      HTML
                  </li>
                  <li>
                      CSS
                  </li>
                  <li>
                      Javascript
                  </li>
                  <li>
                      Responsive Design
                  </li>
                  <li>
                      Bootstrap
                  </li>
                  <li>
                      jQuery
                  </li>
                  <li>
                      React
                  </li>
              </ul>
              <h3>
                  Back End Proficiencies
              </h3>
              <ul>
                  <li>
                      MySQL
                  </li>
                  <li>
                      Sequelize
                  </li>
                  <li>
                      NoSQL
                  </li>
                  <li>
                      MongoDB
                  </li>
                  <li>
                      REST
                  </li>
                  <li>
                      Node
                  </li>
                  <li>
                      Express
                  </li>
              </ul>
              </div>
              
        </div>
        
    )
}

export default Resume;