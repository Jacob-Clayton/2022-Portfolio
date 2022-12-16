import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='http://linkedin.com/in/jebclayton'><BsLinkedin /></a>
    </div>
    <div>
      <a href='https://github.com/Jacob-Clayton'><BsGithub /></a>
    </div>
  </div>
);

export default SocialMedia;