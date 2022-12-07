import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper'

import './Header.scss';

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span className='wave'>👋</span>
            <div style={{ marginLeft: 10 }}>
              <p className='p-text'>Hi, my name is</p>
              <h1 className='head-text-name'>Jacob</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Data Analyst</p>
            <p className='p-text'>& Full Stack Dev</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-img'
      >
        <img src={images.kolsaspfp} alt="profile-bg"/>
        {/*<motion.img
          variants={scaleVarients}
          whileInView={scaleVarients.whileInView}
          src={images.bloblb}
          alt="profile-circle"
          className="overlay_circle"
        />*/}
      </motion.div>

      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
      >
        {[images.tableaularge, images.pythonlarge, images.sqllarge].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt='circle'/>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');