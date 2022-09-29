import React from "react";
import ddata from "./ddata";

import Carousel from "react-elastic-carousel";
import styles from "./spk.module.css";

const breakPoints = 
[
  {
    width:1,
    itemsToShow: 1,
    
  },
  {
   
   width:1,
   itemsToShow:2,
   
  },
  {
    width:1,
    itemsToShow: 3
  },
  {
    width:20,
    itemsToShow: 4,
  },
  {
    // width:1,
    itemsToShow:5,
  },
  {
    // width:300,
    itemsToShow:6,
  },
  {
    // width:2,
    itemsToShow:7,
  },
  {
    // width:120,
    itemsToShow:8,
  },
  {
    // width:120,
    itemsToShow:9,
  },
  {
    // width:120,
    itemsToShow:10,
  },
  {
    // width:120,
    itemsToShow:11,
  },
];




export const Spk = () => {
  return (
    <>

    <h1 id={styles.h} >Shop For</h1>
    <Carousel className={styles.container}  itemPadding={[5, 10]} 
     outerSpacing={10} enableAutoPlay autoPlaySpeed={1500}    breakPoints={breakPoints}>
      {ddata.map((d)=>{
        return(
          <div  className={styles.a}>
            
            <article key={d.id}>
              
            <a href="#">
                  <img width={172} height={172} src={d.image} alt={d.description} />
                  <h3>{d.text}</h3>
                </a>
                
            </article>
          </div>
        )
      })}
  {/* <Item>1</Item>
  <Item>2</Item>
  <Item>3</Item>
  <Item>4</Item>
  <Item>5</Item>
  <Item>6</Item> */}
 
</Carousel>
   
      </>
    
  );
};
