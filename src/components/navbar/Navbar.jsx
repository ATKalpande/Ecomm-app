import React from "react";
import styles from "./navbar.module.css";
import { MdLocationOn, MdSearch } from "../../services";
export const Navbar = () => {
  return (
    <>
      <section className={styles.navbar__container}>
        <div className={styles.navbar__left_links}>
          <ul>
            <li>Watches</li>
            <li>Premium Watches</li>
            <li>New Arrivals</li>
            <li>Smart</li>
          </ul>
        </div>
        <div className={styles.navbar__middle_links}>
          <div className={styles.navbar__logo}>
            <img src="assets/images/titan_logo.svg" alt="logo" />
          </div>
        </div>
        <div className={styles.navbar__right_links}>
          <ul>
            <li>Clocks</li>
            <li>Accessaries</li>
            <li>Our Brands</li>
            <li>Gifting</li>
            <li role={"button"}>
              <MdLocationOn size={20} title={"Location"} />
            </li>
            <li role={"button"}>
              <MdSearch size={20} title={"Search"} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
