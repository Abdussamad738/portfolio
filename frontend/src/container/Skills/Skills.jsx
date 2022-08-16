import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Inconsolata&family=Aboreto&family=Alumni+Sans+Pinstripe"></link>

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [filterSkill, setFilterSkill] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {

    const query = '*[_type == "skills"]';
    
    client.fetch(query).then((data) => {
      console.log(data);
      setSkills(data);
    });

    client.fetch(query).then((data) => {
      setSkills(data);
      setFilterSkill(data);
    });
  }, []);

  const handleSkillFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    console.log("it is from handleskill filter strting");

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterSkill(skills);
      } else {
        setFilterSkill(skills.filter((skill) => skill.tags.includes(item)));
        console.log("it is from handleskill filter else");
      }
    }, 500);
  };
  const ConsoleLog=({children})=>{
    console.log(children);
    return false;
  }

  return (
    
    <>
      <h2 className="head-text1">Skills </h2>

      <div className="app__work-filter">
        {['Front-end', 'Back-end', 'Frameworks', 'Databases', 'IDE', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleSkillFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {filterSkill.map((skill,index) => (

            
            
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              whileHover={{ scale: 1.1}}
              transition={{ duration: 0.2 }}
              className="app__skills-item app__flex"
              key={index}
            
            
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
                
              >
                
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);