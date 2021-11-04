import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header className={styles.header}>
    <div className={styles.logo}>용병구함</div>
    <ul className={styles.menu}>
      <li>내주변</li>
      <li>긴급구함</li>
      <li>더보기</li>
      <li>로그인</li>
    </ul>
  </header>
);

export default Header;
