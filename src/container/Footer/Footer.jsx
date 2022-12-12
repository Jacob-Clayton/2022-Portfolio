import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { BsChevronDoubleUp } from 'react-icons/bs'
import './Footer.scss';

{/*const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };*/}
const Footer = () => {
  return (
    <>
      <h2 className='head-text'><span>Connect</span> with me</h2>

      <div className="app__footer-cards">
        <a href="http://linkedin.com/in/jebclayton">
          <motion.div 
          className="app__footer-card"
          whileHover={{scale:0.985}}
          whileTap={{scale:0.9}}        
          >
            <img src={images.linkedin} alt="linkedin" />
            <p className='p-text'>linkedin.com/in/jebclayton</p>
          </motion.div>
        </a>
        <a href="mailto:jacobeclayton@gmail.com">
        <motion.div 
          className="app__footer-card"
          whileHover={{scale:0.985}}
          whileTap={{scale:0.9}}        
          >
            <img src={images.gmail} alt="email" />
            <p className="p-text">jacobeclayton@gmail.com</p>
          </motion.div>
        </a>
      </div>
      {/*<div className="scrollDiv">
          <motion.a 
          href="#home" 
          className="flex"
          whileTap={{opacity: 0, scale: 0.95}}
          transition={{duration: 0.3}}
          >
            <BsChevronDoubleUp className="icon"/>
          </motion.a>
          <p>Top</p>
        </div>

      <h2>and finally, my certificates...</h2>
      <div className="app__footer-cards">

        <a href='https://www.coursera.org/account/accomplishments/professional-cert/RN7GNF7XXK4Q'>
          <motion.div 
          className="app__footer-card-cert"
          whileHover={{scale:0.97}}
          whileTap={{scale:0.9}}        
          >
            <img src={images.google} alt="google" />
            <p className='p-text'>Google Data Analytics</p>
          </motion.div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/verify/65HAEV27YU4K">
          <motion.div 
          className="app__footer-card-cert"
          whileHover={{scale:0.97}}
          whileTap={{scale:0.9}}
          >
            <img src={images.meta} alt="meta" />
            <p className='p-text'>Programming in Python</p>
          </motion.div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/specialization/HE5LFX58QDSK">
          <motion.div 
          className="app__footer-card-cert"
          whileHover={{scale:0.97}}
          whileTap={{scale:0.9}}
          >
            <img src={images.michigan} alt="michigan" />
            <p className="p-text">Python Specialisation</p>
          </motion.div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/verify/JBU4LT9T7CSW">
          <motion.div 
          className="app__footer-card-cert"
          whileHover={{scale:0.97}}
          whileTap={{scale:0.9}}
          >
            <img src={images.ucdavisblue} alt="ucdavis" />
            <p className="p-text">SQL for Data Science</p>
          </motion.div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/verify/BSC823S6CKNB">
          <motion.div 
          className="app__footer-card-cert"
          whileHover={{scale:0.97}}
          whileTap={{scale:0.9}}
          >
            <img src={images.ucdavisblue} alt="ucdavis" />
            <p className="p-text">Tableau</p>
          </motion.div>
        </a>

        <a href="https://www.coursera.org/account/accomplishments/verify/VRUZF7T3B94H">
          <motion.div 
          className="app__footer-card-cert"
          whileHover={{scale:0.97}}
          whileTap={{scale:0.9}}
          >
            <img src={images.google} alt="google" />
            <p className="p-text">R Programming</p>
          </motion.div>
        </a>
      </div>*/}
    </>
  );
};


export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);