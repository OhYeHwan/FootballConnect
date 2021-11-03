import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header className={styles.header}>
    <section className={styles.section}>
      <h1 className={styles.title}>용병구함</h1>
      <ul className={styles.menu}>
        <li>내주변</li>
        <li>긴급구함</li>
        <li>더보기</li>
        <li>로그인</li>
      </ul>
    </section>
  </header>
);

export default Header;
