import React from 'react'
import { Navbar,Footer } from '../../components';
import styles from "./about.module.css";

export const About = () => {
  return (
    
    <div>
      
      <Navbar/>

      
     <div>
     <p className={styles.cont}>
        We have lots of Own Collection Of Designer Watches.
        Now we developing next level watches that can change the era of the Watches.
      </p>
     </div>
      


<div className={styles.footer}>
<Footer/>
</div>
      
   
    </div>

  )
}
