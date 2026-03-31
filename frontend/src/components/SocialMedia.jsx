import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/Abdussamad738"><BsGithub /></a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/abdulsamadkoleth"><BsLinkedin /></a>
    </div>
    <div>
      <BsTwitter />
    </div>
    
  </div>
);

export default SocialMedia;