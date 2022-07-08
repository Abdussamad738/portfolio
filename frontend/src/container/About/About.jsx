import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import '../Header/Header.scss';
import ParticlesJs from '../particles/ParticlesJs';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
        
    
    <div className='particles' >
      
       <h2 className="about__text">About <span>Me</span> </h2> 
      <div className="inner" >
      <div className='p-about'>Passionate Software developer with experience in software development, testing, documentation across the complete development life cycle of a product. 
      I realized my curiosity in coding and problem solving while doing Engineering in Electronics and Communication. That led me to have a 2 year post graduate diploma Full stack course in Toronto. 
      Within these years i have worked for a <a className="a__link" href="https://www.cognizant.com/ca/en">MNC</a> and a <a className="a__link"href="https://softcovision.com/">Start-up</a>. Developed Web applications using cutting-edge technologies like React, Angular, Spring, Flask, NodeJs, Express and adding more soon..</div>
      <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: 'tween' }}
            className="about_me"
            
          >
            <img src={images.studying} alt="studying" />
          </motion.div>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about','particles'),
  
  
);