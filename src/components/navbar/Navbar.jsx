import React from "react";
import styles from "./navbar.module.css";
import { MdLocationOn, MdSearch } from "../../services";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <section className={styles.navbar__container}>
        <div className={styles.navbar__left_links}>
          <ul>
            <Link to="/watches ">
              <li  >Watches</li>
            </Link>

          <Link to="/about"><li>About</li></Link>
             
            <li> <Link to="/New_Arrival"><li>New_Arrival</li></Link></li>
            <li>Smart</li>
          </ul>
        </div>
        <div className={styles.navbar__middle_links}>
          <div className={styles.navbar__logo}>
            <Link to="/"><img src="assets/images/titan_logo.svg" alt="logo" /></Link>
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
