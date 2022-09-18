import React from 'react';

import Header from '../Header';
import FamilyFormContainer from '../FamilyFormContainer';
import styles from './App.module.css';

const App = () => (
  <div className={styles.App}>
    <Header />
    <FamilyFormContainer />
  </div>
);

export default App;
