import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"><span>Skills</span> & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
              <ReactTooltip
                id={skill.name}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                {skill.about}
              </ReactTooltip>
            </>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text-company">{work.company}</p>
                      <p className='p-text'>{work.desc}</p>
                      <p className='p-text'>{work.desc2}</p>
                      <p className='p-text'>{work.desc3}</p>
                      <p className='p-text'>{work.desc4}</p>
                      <p className='p-text'>{work.desc5}</p>
                    </motion.div>
                    {/*<ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>*/}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))} 
          {/*
          <div className="app__skills-exp">
            <motion.div 
            className="app__skills-exp-item"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}>
            <div className="app__skills-exp-year">
              <p className="bold-text">Other</p>
            </div>
              <motion.div className="app__skills-exp-works">
                <motion.div 
                className="app__skills-exp-work"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                >
                  <h4 className="bold-text">Certificates</h4>
                  <a href='https://www.coursera.org/account/accomplishments/professional-cert/RN7GNF7XXK4Q'  target='_blank' className='href'><p className='p-text'>• Data Analytics, Google</p></a>
                  <a href="https://www.coursera.org/account/accomplishments/verify/JBU4LT9T7CSW" target='_blank' className="href"><p className='p-text'>• SQL for Data Science, University of California, Davis</p></a>
                  <a href="https://www.coursera.org/account/accomplishments/verify/BSC823S6CKNB" target='_blank' className="href"><p className='p-text'>• Tableau Visualisation, University of California, Davis</p></a>
                  <a href="https://www.coursera.org/account/accomplishments/specialization/HE5LFX58QDSK" target='_blank' className="href"><p className='p-text'>• Python for Everybody, University of Michigan</p></a>
                  <a href="https://www.coursera.org/account/accomplishments/verify/65HAEV27YU4K" target='_blank' className="href"><p className='p-text'>• Python Programming, Meta</p></a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>  
          */}   
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__nansendgreenbg',
);