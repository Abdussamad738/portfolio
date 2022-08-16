import React from 'react';
import { BsTwitter, BsInstagram,BsGithub,BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

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