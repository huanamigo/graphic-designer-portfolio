import React from 'react';
import Photo from './Photo/Photo';
import styles from './Photos.module.scss';

function Photos() {
  return (
    <div className={styles.div}>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
      <Photo img={process.env.PUBLIC_URL + 'img1.PNG'}></Photo>
    </div>
  );
}

export default Photos;
