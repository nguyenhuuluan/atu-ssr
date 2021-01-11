import React from 'react';
import Header from '../components/header.component';
import styles from '../styles/index.module.scss';

const Home = () => (
  <>
    <Header />
    <div className={styles.title}>
      <p>Sass</p>
    </div>
    <h1>This is home page</h1>
  </>
);

export default Home;
