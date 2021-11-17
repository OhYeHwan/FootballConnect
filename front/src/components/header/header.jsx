import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className={styles.header}>
    <section className={styles.container}>
      <h1 className={styles.logo}>용병구함</h1>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>팀구함</li>
        <li className={styles.menu_item}>긴급구함</li>
        <li className={styles.menu_item}>더보기</li>
        <Link to="login" className={styles.menu_item}>
          로그인
        </Link>
      </ul>
      <FontAwesomeIcon icon={faBars} className={styles.toggleBtn} />
    </section>
  </header>
);

export default Header;
