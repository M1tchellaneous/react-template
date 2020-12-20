import React from 'react';

import Fade from '../../animations/Fade/Fade';

import styles from './Home.module.css';

const Home = () => {

  return (
    <Fade>
      <div className={styles.Container}></div>
    </Fade>
  );
}

export default Home;