import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2  className={styles.title}  data-aos="zoom-out-right" >Tentang Saya</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/vin.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage} data-aos="zoom-in-up"
        />
        <ul className={styles.aboutItems} data-aos="zoom-out-left">
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
               Saya memiliki Kemampuan di bidang frontend. yaitu membuat tampilan Responsive
                dan membuat animasi yang menarik
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Saya memiliki pengalaman mengembangkan sistem dan API back-end yang cepat dan optimal
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              Saya telah merancang beberapa halaman arahan dan telah membuat sistem desain juga
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
