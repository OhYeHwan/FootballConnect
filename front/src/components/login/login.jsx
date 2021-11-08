import React from "react";
import styles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <section className={styles.login}>
      <form>
        <h1 className={styles.logo}>용병구함</h1>
        <button className={styles.kakao}>
          <div className={styles.content}>
            <FontAwesomeIcon icon={faComment} className={styles.icon} />
            카카오톡으로 로그인
          </div>
        </button>
        <button className={styles.naver}>
          <div className={styles.content}>
            <FontAwesomeIcon icon={faComment} className={styles.icon} />
            네이버로 로그인
          </div>
        </button>
        <button className={styles.google}>
          <div className={styles.content}>
            <FontAwesomeIcon icon={faComment} className={styles.icon} />
            Google로 로그인
          </div>
        </button>
        <p className={styles.spaceOr}>
          <span>또는</span>
        </p>
        <div className={styles.inputBox}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="이메일 주소"
          />
        </div>
        <div className={styles.inputBox}>
          <FontAwesomeIcon icon={faLock} className={styles.icon} />
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="비밀번호"
          />
        </div>
        <button className={styles.loginBtn}>
          <div>로그인</div>
        </button>
        <div className={styles.link_half}>
          <div className={styles.link_half_div}>비밀번호 재설정</div>
          <div className={styles.link_half_div}>회원가입</div>
        </div>
      </form>
    </section>
  );
};

export default Login;
