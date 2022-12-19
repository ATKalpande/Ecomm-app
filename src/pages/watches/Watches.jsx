import React from 'react'
import {Navbar,Footer,Midb} from "../../components";
import styles from "./watches.module.css";


export const Watches = () => {
  return (
    
    
    <div className={styles.conatin}>
      <Navbar/>


    <div className={styles.main}>
        <img className={styles.img1} width="100%" height="302 px" src="/assets/images/2500x500_Ti_Smartfest.jpg" ></img>
    </div>

    <div className={styles.container_fluid}>
        <div className={styles.row}>
            <div className={styles.pick}>
                <a href="#">
                    <div>
                        <img width="22" height="22" src="/assets/images/watches/store-locataor.svg"></img> 
                    </div>
                    <div className={styles.heading-1}>
                        <h2>Pick Up Point</h2>
                        
                    </div>
                </a>
            </div>

            <div className={styles.pick}>
                <a href="#">
                    <div>
                        <img width="22" height="22" src="/assets/images/watches/BookAnAppointment_200x200_2+(1).svg" />
                    </div>
                    <div className={styles.heading_1}>
                        <h2>Book Your Appointment</h2>
                        
                    </div>
                </a>
            </div>

            <div className={styles.pick}>
                <a href="#">
                    <div>
                        <img width="22" height="22" src="/assets/images/watches/NoCostEMI_Alt_200x200+(1).svg" />
                    </div>
                    <div className="heading-1">
                        <h2>Buy With No Cost Emi</h2>
                        
                    </div>
                </a>
            </div>

            <div className={styles.pick}>
                <a href="#">
                    <div>
                        <img width="22" height="22" src="/assets/images/watches/DownloadWoT_200x200+(1).svg" />
                    </div>
                    <div className={styles.heading-1}>
                        <h2>Download app from Titan</h2>
                        
                    </div>
                </a>
            </div>
        </div>
    </div>
        
    <div className={styles.grid}>
        <div className={styles.box1}>
                    <img width={'300px'} height={"200px"} src="/assets/images/90153QM01_1.webp" alt="" />
                    <div className={styles.btn}>
                        <button className={styles.fst} type='text' >Click here</button>
                        <button className={styles.fst} type='text' >Click here</button>

                    </div>
        </div>
        <div className={styles.box1}>
        <img width={'300px'} height={"200px"} src="/assets/images/90153QM01_1.webp" alt="" />
                    <div className={styles.btn}>
                        <button className={styles.fst} type='text' >Click here</button>
                        <button className={styles.fst} type='text' >Click here</button>

                    </div>
        </div>
        <div className={styles.box1}>
        <img width={'300px'} height={"200px"} src="/assets/images/90153QM01_1.webp" alt="" />
                    <div className={styles.btn}>
                        <button className={styles.fst} type='text' >Click here</button>
                        <button className={styles.fst} type='text' >Click here</button>

                    </div>
        </div>
        <div className={styles.box1}>
        <img width={'300px'} height={"200px"} src="/assets/images/90153QM01_1.webp" alt="" />
                    <div className={styles.btn}>
                        <button className={styles.fst} type='text' >Click here</button>
                        <button className={styles.fst} type='text' >Click here</button>

                    </div>
        </div>
        <div className={styles.box1}>
        <img width={'300px'} height={"200px"} src="/assets/images/90153QM01_1.webp" alt="" />
                    <div className={styles.btn}>
                        <button className={styles.fst} type='text' >Click here</button>
                        <button className={styles.fst} type='text' >Click here</button>

                    </div>
        </div>
        <div className={styles.box1}>
        <img width={'300px'} height={"200px"} src="/assets/images/90153QM01_1.webp" alt="" />
                    <div className={styles.btn}>
                        <button className={styles.fst} type='text' >Click here</button>
                        <button className={styles.fst} type='text' >Click here</button>

                    </div>
        </div>
        <div className={styles.box1}>
        <img width={'300px'} height={"200px"} src="/assets/images/90153QM01_1.webp" alt="" />
                    <div className={styles.btn}>
                        <button className={styles.fst} type='text' >Click here</button>
                        <button className={styles.fst} type='text' >Click here</button>

                    </div>
        </div>
        <div className={styles.box1}>
        <img width={'300px'} height={"200px"} src="/assets/images/90153QM01_1.webp" alt="" />
                    <div className={styles.btn}>
                        <button className={styles.fst} type='text' >Click here</button>
                        <button className={styles.fst} type='text' >Click here</button>

                    </div>
        </div>
        
    </div>

    
    <div className={styles.footer}>
        <Footer/>
    </div>
      
    </div>
  )
}
