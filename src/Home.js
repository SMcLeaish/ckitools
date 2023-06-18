import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Home.module.css'

function Home(){
  const navigate = useNavigate()
  
  return(
    <div className={styles.homeContainer}>
      <h1 onClick={() => navigate('Mapping')}>Mapping</h1>
      <h1 onClick={() => navigate('OSINT')}>Osint</h1>
    </div>
  )}
export default Home

