import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';
import Moment from 'moment';
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Inconsolata&family=Aboreto&family=Alumni+Sans+Pinstripe&family=Roboto&family=Quicksand"></link>
const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      console.log(data);
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  // client
  // .delete({query: '*[_type == "works" && _id=="drafts.65958f37-d02c-45ce-9fcb-adc9ab36041a"]'})
  // .then(console.log)
  // .catch(console.error)

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const ConsoleLog=({children})=>{
    console.log(children);
    return false;
  }

  const formatDate=(item)=>{
    return Moment(item).format ('MMM YYYY')
  }

  return (
    <>
      <h2 className="head-text1">Works</h2>

      <div className="app__work-filter">
        {['Work Experience', 'Projects', 'Certification','Education', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
            
          </div>
        ))}
      </div>
      <div>

      {/* <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        whileInView={{ opacity: [0, 1] }}
        
        
        className="app__work-portfolio"
      > */}
      <div className="app__work-portfolio">
        {filterWork.map((work, index) => (
          
          
          <motion.div 
                className="app__work-item app__work-content app__flex" 
                key={index}
                // transition={{ duration: 0.5, delayChildren: 0.5 }}
                whileInView={{ opacity: [0, 1] }}
                whileHover={{ scale: 1.05 }}
                
                
                
              >
                <a href={work.link}>
                <ConsoleLog>{work.link}</ConsoleLog>
            
            <motion.img className="app__work-img" whileHover={{ scale: 1.1 }} src={urlFor(work.icon).url()}  alt={work.name} /></a>
              
              <h4 className="work-name">{work.name} </h4>
              <h4 className='work-role'>{work.role}</h4>
              <h5 className='work-date'>{formatDate(work.from)}  <span> - </span>   {formatDate(work.to)}</h5>
              <p className="p-text1" style={{ marginTop: 10 }}>{work.description}</p>
              </motion.div>
              
              
              
              

              
            
          
        ))}
        </div>
        </div>
      {/* </motion.div> */}
      
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);