import React from "react";
import styles from "./mid.module.css";

export const Mid = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sn}>
        <div className={styles.imgsn}>
          <img
            width={227}
            height={106}
            src="assets/images/dc/Snapmint_Logo_427_200.jpg"
          ></img>
        </div>

        <div className={styles.infosn}>
          <h4>Cardless EMI</h4>
          <p>0% Interest | 3-12 Months EMI </p>
          <p>No Credit Card Needed</p>
        </div>
      </div>

      <div className={styles.gain}>
        <div className={styles.ifo}>
          <h4>Bajaj Finserv No Cost EMI</h4>
          <p>0% Interest</p>
          <p>3-12 Months EMI</p>
        </div>

        <div className={styles.gainimg}>
          <img
            width={210}
            height={56}
            src="assets/images/dc/Bajaj_blue.png"
          ></img>
        </div>
      </div>
      <hr/>
    </div>
  );
};
