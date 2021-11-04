import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => (
  <header className={styles.header}>
    <section className={styles.container}>
      <div className={styles.logo}>용병구함</div>
      <div className={styles.space}></div>
      <ul className={styles.menu}>
        <li>내주변</li>
        <li>긴급구함</li>
        <li>더보기</li>
        <li>로그인</li>
      </ul>
      <FontAwesomeIcon icon={faBars} className={styles.toggleBtn} />
    </section>
  </header>
);

export default Header;
