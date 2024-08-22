import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>HI, SAYA PRIMA HARI NUGRAHA</h1>
        <p className={styles.description}>
        Hai, Nama saya Prima Hari Nugraha. Saya seorang Mahasiswa
       Semester 7 Jurusan Teknik Informatika, Yang memiliki kemampuan dalam pengembangan Web.
        </p>
        <a href="mailto:primaharinugraha18@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/okebaru.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
