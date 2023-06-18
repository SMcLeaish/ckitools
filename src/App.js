import styles from './App.module.css'
import React from 'react'
import Header from './Header'
import {Routes, Route} from 'react-router-dom';
import Home from './Home'
import Mapping from './Mapping'

//import Osint from './Osint
function App() {
  return( 
  <div className={styles.App}> 
    <Header/>
    <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/Mapping' element={<Mapping/> } />
    </Routes>
  </div>)
    
}    
export default App;
