import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
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
  };

  return (
    <>
      <h2 className="head-text">Certificates</h2>
      <div className="app__footer-cards">
        <motion.div 
        className="app__footer-card-cert"
        whileHover={{scale:1.05}}
        whileTap={{scale:0.4}}
        >
          <img src={images.google} alt="google" />
          <a href="https://www.coursera.org/account/accomplishments/professional-cert/RN7GNF7XXK4Q" className="p-text">Google Data Analytics</a>
        </motion.div>
        <motion.div 
        className="app__footer-card-cert"
        whileHover={{scale:1.05}}
        whileTap={{scale:0.4}}
        >
          <img src={images.meta} alt="meta" />
          <a href="https://www.coursera.org/account/accomplishments/verify/65HAEV27YU4K" className="p-text">Programming in Python</a>
        </motion.div>
        <motion.div 
        className="app__footer-card-cert"
        whileHover={{scale:1.05}}
        whileTap={{scale:0.4}}
        >
          <img src={images.michigan} alt="michigan" />
          <a href="https://www.coursera.org/account/accomplishments/specialization/HE5LFX58QDSK" className="p-text">Python Specialisation</a>
        </motion.div>
        <motion.div 
        className="app__footer-card-cert"
        whileHover={{scale:1.05}}
        whileTap={{scale:0.4}}
        >
          <img src={images.ucdavisblue} alt="ucdavis" />
          <a href="https://www.coursera.org/account/accomplishments/verify/JBU4LT9T7CSW" className="p-text">SQL for Data Science</a>
        </motion.div>
        <motion.div 
        className="app__footer-card-cert"
        whileHover={{scale:1.05}}
        whileTap={{scale:0.4}}
        >
          <img src={images.ucdavisblue} alt="ucdavis" />
          <a href="https://www.coursera.org/account/accomplishments/verify/BSC823S6CKNB" className="p-text">Tableau</a>
        </motion.div>
        <motion.div 
        className="app__footer-card-cert"
        whileHover={{scale:1.03}}
        whileTap={{scale:0.4}}
        >
          <img src={images.google} alt="google" />
          <a href="https://www.coursera.org/account/accomplishments/verify/VRUZF7T3B94H" className="p-text">R Programming</a>
        </motion.div>
      </div>
      <br/>
      <br/>
      <br/>
      <h2>Get in touch with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card1">
          <img src={images.gmail} alt="email" />
          <p className="p-text">jacobeclayton@gmail.com</p>
        </div>
        <motion.div 
        className="app__footer-card"
        whileHover={{scale:1.05}}
        whileTap={{scale:0.4}}        
        >
          <img src={images.linkedin} alt="linkedin" />
          <a href="http://linkedin.com/in/jebclayton" className="p-text">linkedin.com/in/jebclayton/</a>
        </motion.div>
      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);