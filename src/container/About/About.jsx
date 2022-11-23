import React, { useState, useEffect } from 'react';
import motion from 'framer-motion';

import './About.scss';

const abouts = () => {
  {title: 'Web Development', description: 'I am a good web developer', imageUrl: ''},
  {title: 'Data Analysis', description: 'I am a good web developer', imageUrl: ''},
  {title: 'Data Visualisation', description: 'I am a good web developer', imageUrl: ''},
}

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I know that
        <span>Good Design</span>
        <br/>
        Means
        <span>Good Business</span>
        </h2> 

        <div className='app__profiles'>
        
        </div>   
    </>
  );
}

export default About;