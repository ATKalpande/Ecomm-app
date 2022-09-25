import React from "react";
import cdata from "./cdata";

import Carousel from "react-elastic-carousel";
import styles from "./slider.module.css";

const breakPoints = 
[
  {
   
    itemsToShow: 1,
    
  },
  {
   
    itemsToShow: 2,
  },
  {
    
    itemsToShow: 3,
  },
  {
    
    itemsToShow: 4,
  },
  {
    itemsToShow:5,
  },
 
];

export const Slider = () => {
  return (
    <>
      <Carousel enableAutoPlay autoPlaySpeed={1500} breakPoints={breakPoints}>
        {cdata.map((c) => {
          return (
            <div className={styles.recommendedItem_section_singleItem}>
              <article key={c.id}>
                <a href="#">
                  <img src={c.image} alt={c.description} />
                </a>
              </article>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};
