import React from 'react';
import Navbar from './Navbar';
import StatusBar from './StatusBar';
import { Outlet } from 'react-router-dom';
import styles from './index.module.css';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <div className={styles.rightSide}>
        <div className={styles.body}>
          <Outlet></Outlet>
        </div>
        <StatusBar></StatusBar>
      </div>
    </div>
  );
};

export default Layout;
