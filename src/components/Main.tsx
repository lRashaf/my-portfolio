import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
       
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/lRashaf" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="linkedin.com/in/rasha-alzyadi" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Rasha Alzyadi </h1>
          <p>Web Developer | UX UI Designer</p>

          <div className="mobile_social_icons">
          <a href="https://github.com/IRashaf" target="_blank" rel="noreferrer"><GitHubIcon/></a>
           <a href="linkedin.com/in/rasha-alzyadi" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;