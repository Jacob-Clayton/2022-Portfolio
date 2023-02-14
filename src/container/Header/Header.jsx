import React from 'react';
import { motion } from 'framer-motion';
import {BsChevronDoubleDown} from 'react-icons/bs'
import { AppWrap } from '../../wrapper'
import './Header.scss';

const Header = ({ text = 'Jacob Clayton' }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
      },
    },
    hidden: {
      opacity: 0,
      x: -5,
      y: 25,
      transition: {
        type: "tween",
      },
    },
  };

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

        <motion.h1 
        className='title'
        style={{ overflow: "hidden" }}
        variants={container}
        initial="hidden"
        animate="visible"
        >
          {letters.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
        </motion.h1>

        <span className="subTitle">
          Full Stack Developer and Blockchain Analyst.
        </span>

        <p className='homeParagraph'>
        I love coding cool things.
        </p>

        <div className="scrollDiv">
          <motion.a 
          href="#about" 
          className="flex"
          whileInView={{ opacity: [0, 1] }}
          whileTap={{opacity: 0.2, scale: 0.95}}
          transition={{duration: 4}}
          >
            <BsChevronDoubleDown className="icon"/>
          </motion.a>
        </div>

      </div>
    </motion.section>
  );
}

export default AppWrap(Header, 'home');