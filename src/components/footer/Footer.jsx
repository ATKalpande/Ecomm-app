import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.foot}>
      <div className={styles.container}>
        <ul className={styles.ul_list}>
          <li className={styles.txt}>
            <p className={styles.heading}>CUSTOMER SERVICES</p>

            <a href="#">Payment Option</a>
            <a href="#">Track Order</a>
            <a href="#">Encircle Program</a>
          </li>
          <li className={styles.txt}>
            <a className={styles.heading} href="#">
              CONTACT US
            </a>

            <a href="#">1800-266-0123</a>
            <a href="#">customercare@titan.co.in</a>
            <a href="#">FAQ</a>
          </li>
          <li className={styles.txt}>
            <a className={styles.heading} href="#">
              POLICIES
            </a>

            <a href="#">Returns & Exchanges</a>
            <a href="#">Cancellation</a>
            <a href="#">Shipping</a>
            <a href="#">Delivery Information</a>
          </li>
          <li className={styles.txt}>
            <a className={styles.heading} href="#">
              ABOUT TITAN
            </a>

            <a href="#">Corporate</a>
            <a href="#">Careers</a>
          </li>
        </ul>
        {/* social */}
        <div className={styles.social}>
          <div>
            <h3>DOWNLOAD WORLD OF TITAN APP</h3>
          </div>
          <div className={styles.store}>
            <div className={styles.apple}>
              <a href="#">
                <img width={129} height={39} src="./assets/images/apple.webp" />
              </a>
            </div>
            <div className={styles.play}>
              <a href="#">
                <img
                  width={129}
                  height={38}
                  src="./assets/images/google-play-badge.webp"
                />
              </a>
            </div>
          </div>

          <div className={styles.us}>
            <div>
              <h4>FOLLOW US WITH</h4>

              <div>
                <ul className={styles.akb}>
                  <li>
                    <a href="#" title="facebook">
                      <img src=".assets/images/Facebook-white.svg"></img>
                    </a>
                  </li>

                  <li>
                    <a href="#" title="facebook">
                      <img src=".assets/images/Twitter-white.svg"></img>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="facebook">
                      <img src=".assets/images/Instagram_white.svg"></img>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="facebook">
                      <img src=".assets/images/pinterest-white-40.webp"></img>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.planetx}>
            <p>
              Want Help?
              <a href="#">
                <strong> click here </strong>
              </a>
              to chat with us on
              <img src=".assets/images/WhatsApp_Logo.webp"></img>
            </p>
            <p className={styles.op}>
              Operating Hours: 10:00AM to 10:00PM Monday to Sunday
            </p>
          </div>
        </div>
      </div>

      {/* bottom container */}

      <div className={styles.bottom_container}>
        <div className={styles.h}>
          <div className={styles.text}></div>
          <div className={styles.cond}>
            <a href="#">TERMS & CONDITIONS</a>
          </div>
          <div className={styles.cond}>
            <a href="#">PRIVACY POLICY</a>
          </div>
          <div className={styles.cond}>
            <a href="#">WEARABLES PRIVACY POLICY</a>
          </div>
        </div>
        <div className={styles.copy}>© 2022 Titan Company Limited. All Rights Reserved.</div>
      </div>
    </footer>
  );
};
