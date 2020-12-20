import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Fade.module.css';

const Fade = props => (
  <CSSTransition {...props}
      appear
      classNames={{
        appear: styles.Enter,
        appearActive: styles.EnterActive,
        appearDone: styles.Exit,
        enter: styles.Enter,
        enterActive: styles.EnterActive,
        enterDone: styles.Exit,
        exit: styles.Exit,
        exitActive: styles.ExitActive,
        exitDone: styles.Enter
      }} 
      timeout={500} mountOnEnter unmountOnExit>
    {props.children}
  </CSSTransition>
);

export default Fade;