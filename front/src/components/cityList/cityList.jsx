import React from "react";
import styles from "./cityList.module.css";

const CityList = ({ citys, selected, onSelect }) => {
  return (
    <ul className={styles.container}>
      {citys.map((city, i) => {
        if (city === selected)
          return (
            <li key={i} className={styles.selected}>
              {city}
            </li>
          );
        else
          return (
            <li key={i} className={styles.item} onClick={() => onSelect(city)}>
              {city}
            </li>
          );
      })}
    </ul>
  );
};

export default CityList;
