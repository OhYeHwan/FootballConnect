import React, { useEffect, useState } from "react";
import CityList from "../cityList/cityList";
import MatchList from "../matchList/matchList";
import styles from "./matches.module.css";
import data from "../../static/matches";

const citys = [
  "전체",
  "서울",
  "경기",
  "인천",
  "강원",
  "충북",
  "충남",
  "세종",
  "대전",
  "울산",
  "대구",
  "전북",
  "전남",
  "광주",
  "경북",
  "경남",
  "부산",
  "제주",
];

const Matches = () => {
  const [selected, setSelected] = useState("전체");
  const [matches, setMatches] = useState(data);

  useEffect(() => {
    const filteredMatches = data.filter((item) => {
      if (selected === "전체") return true;
      else {
        return item.do === selected ? true : false;
      }
    });
    setMatches(filteredMatches);
  }, [selected]);

  const onSelect = (city) => {
    setSelected(city);
  };

  return (
    <>
      <CityList
        citys={citys}
        selected={selected}
        onSelect={onSelect}
      ></CityList>
      <p className={styles.spaceOr}></p>
      <MatchList matches={matches}></MatchList>
    </>
  );
};

export default Matches;
