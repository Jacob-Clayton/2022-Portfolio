import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='http://linkedin.com/in/jebclayton'><BsLinkedin /></a>
    </div>
    <div>
      <a href='https://github.com/Jacob-Clayton'><BsGithub /></a>
    </div>
    <div>
      <a href='https://twitter.com/kolsas_eth'><BsTwitter /></a> 
    </div>
  </div>
);

export default SocialMedia;