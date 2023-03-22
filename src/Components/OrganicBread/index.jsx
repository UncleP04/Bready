import React from "react";
import style from "./style.module.css";

const OrganicBread = () => {
  return (
    <div>
      <div className={style.organicBox}>
        <div className={style.organicContent}>
          <div className={style.topOrganic}>
            <h2>Organic Bread</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Delectus
              exercitationem accusantium mollitia consectetur deleniti
              dignissimos.
            </p>
          </div>
          <div className={style.bottomOrganic}>
            <a href="#organic">Bakery</a>
            <a href="#organic">Cookies</a>
            <a href="#organic">Cafe</a>
            <a href="#organic">Catering</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicBread;
