import React from 'react';
import styles from './Photo.module.scss';

function Photo(props) {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={props.img} alt="" />
    </div>
  );
}

export default Photo;
