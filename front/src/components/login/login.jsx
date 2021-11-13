import React, { useCallback } from "react";
import styles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [value, setValue] = React.useState("");

  const isEmail = useCallback((email) => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  }, []);

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return (
    <section className={styles.login}>
      <div>
        <h1 className={styles.logo}>용병구함</h1>
        <button className={styles.kakao}>
          <div className={styles.content}>
            <FontAwesomeIcon icon={faComment} className={styles.icon} />
            카카오톡으로 로그인
          </div>
        </button>
        <button className={styles.facebook}>
          <div className={styles.content}>
            <FacebookIcon className={styles.icon} />
            페이스북으로 로그인
          </div>
        </button>
        <button className={styles.google}>
          <div className={styles.content}>
            <GoogleIcon className={styles.icon} />
            Google로 로그인
          </div>
        </button>
        <p className={styles.spaceOr}>
          <span>또는</span>
        </p>

        <TextField
          color="success"
          sx={{ width: "100%", marginBottom: 2 }}
          label="이메일 주소"
          id="email"
          error={isEmail(value) || value === "" ? "" : "true"}
          helperText="이메일 주소를 확인해주세요"
          placeholder="이메일 주소"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={
                    isEmail(value) || value === ""
                      ? styles.icon
                      : styles.icon_red
                  }
                />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          color="success"
          sx={{ width: "100%", marginBottom: 2 }}
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faLock} className={styles.icon} />
              </InputAdornment>
            ),
          }}
        />

        <button className={styles.loginBtn}>
          <div>로그인</div>
        </button>
        <div className={styles.link_half}>
          <div className={styles.link_half_div}>비밀번호 재설정</div>
          <div className={styles.link_half_div}>회원가입</div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Login);
