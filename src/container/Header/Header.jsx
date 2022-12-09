import React from 'react';
import { motion } from 'framer-motion';
import {BsChevronDoubleDown} from 'react-icons/bs'
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
    <motion.section 
    id='homePage' 
    className='homeSection'
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
    >
      <div className='container homeContainer'>

        <span className='introText'>
          Hi, my name is
        </span>

        <h1 className='title'>
          Jacob Clayton
        </h1>

        <span className='subTitle'>
          Data Analyst and Full-Stack Developer.
        </span>

        <p className='homeParagraph'>
          I Analyse and visualise data to make data-driven decisions.
          <br/>Web developer & UI/ UX designer.
          <br/>I love building cool things.
        </p>

        <div className="scrollDiv">
          <motion.a 
          href="#about" 
          className="flex"
          whileTap={{opacity: 0, scale: 0.95}}
          transition={{duration: 0.3}}
          >
            <BsChevronDoubleDown className="icon"/>
          </motion.a>
        </div>

      </div>
    </motion.section>
  );
}

export default AppWrap(Header, 'home');