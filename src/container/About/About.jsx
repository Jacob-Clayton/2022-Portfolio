import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

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
      {/* <div className='intro'>
      <h2 className="head-text">About me</h2>
        <p className='p-text'>Hello, my name is Jacob. 
                              <br/>I'm a Full Stack Developer,
                               Blockchain Analyst, Web3 Founder,
                               speaker on Web3 panels
                               and an all-round crypto guy. 
                               You can usually find me playing around with data and building cool things.
                               I also manage the 10th most sold NFT project.</p>
      </div> */}
      <h2 className="head-text">Tech Stack</h2>

      <div className='app__profiles'>
          {abouts.map((about, index) => {
            return (
              <motion.div
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
                <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
              </motion.div>
          )})}
      </div> 
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__nansendgreenbg',
);