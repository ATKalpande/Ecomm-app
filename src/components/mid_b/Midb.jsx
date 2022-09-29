import React from 'react'
import styles from './midb.module.css';

export const Midb = () => {
  return (

    <div>
        <div  className={styles.container}> 
         <div  className={styles.img1}>
            <a href='#'>
              <img width={366} height={331}  src='./assets/images/New folder/Titan_Smartverse_767X695.jpg'></img>
            </a>
        </div>
        <div className={styles.img2}>
        <a href='#'>
              <img width={366} height={331}    src='./assets/images/New folder/TH.jpg'></img>
            </a>
        </div>
        <div className={styles.img3}>
        <a href='#'>
              <img width={366} height={331}   src='./assets/images/New folder/767x695_xylys40p.jpg'></img>
            </a>
        </div>
        <div className={styles.img4}>
        <a href='#'>
              <img width={366} height={331}   src='./assets/images/New folder/fasttrack.jpg'></img>
            </a>
        </div>
    </div>
    <div className={styles.flat}>
      <a href='#'>
      <img width={1519} height={474.5} src='./assets/images/New folder/flat.jpg'></img>
      </a>
      
    </div>
    </div>

    
    
  )
}  
