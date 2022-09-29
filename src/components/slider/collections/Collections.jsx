import React from "react";
import styles from "./collections.module.css";

export const Collections = () => {
  return (
    <div className={styles.collection}>
      <div className={styles.main}>
        <h2>Our Collections </h2>
      </div>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_links}>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Luxury</li>
          </ul>
        </div>
      </div>

      <div>
        <div className={styles.men}>
          <div className={styles.img1}>
            <a href="#">
              <img
                width={304}
                height={443}
                src="./assets/images/men/740x1080_maritime.jpg"
              ></img>
              <p>slimmest watches with intelligent design</p>
            </a>
          </div>
          <div className={styles.img2}>
            <a href="#">
              <img
                width={304}
                height={443}
                src="./assets/images/men/Grandmaster_740x1080.jpg"
              ></img>
              <p >Titan Grand Master</p>
            </a>
          </div>
          <div className={styles.img3}>
            <a href="#">
              <img
                width={304}
                height={443}
                src="./assets/images/men/Re.jpg"
              ></img>
              <p>Regalia</p>
            </a>
          </div>
          <div className={styles.img4}>
            <a href="#">
              <img
                width={304}
                height={443}
                src="./assets/images/men/Edge-ceramic.jpg"
              ></img>
              <p>Maritime</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
