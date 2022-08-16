
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Darkmode from '../Darkmode/Darkmode';
import { images } from '../../constants';
import './Navbar.scss';
import DarkMode from '../Darkmode/Darkmode';
import resume from '../../assets/CV_AbdulSamad.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        
      </div>
      <ul className="app__navbar-links">
        {['home', 'about','skills', 'work',  'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      {/* <Darkmode/> */}
      <a href={resume} download="resume" >
                    <button className="resumeButton" data-aos="fade-up">Resume <span><FontAwesomeIcon icon={faDownload} /></span></button>
                </a>
  

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;