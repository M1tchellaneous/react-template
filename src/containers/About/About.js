import React from 'react';
import { Helmet } from 'react-helmet';

import Fade from '../../animations/Fade/Fade';

import styles from './About.module.css';

const About = () => {

  return (
    <Fade>
      <div className={styles.Container}>
        <Helmet>
          <title></title>
          <meta name='description' content=''/>
        </Helmet>
      </div>
    </Fade>
  );
}

export default About;