import React from "react";
import style from "./style.module.css";

const Family = () => {
  return (
    <div>
      <div className={style.familyBox}>
        <section className={style.topFamily}>
          <span>
            <h2>Family Owned Bakery</h2>
            <p>
              All breads are made in-house by our team of talented bakers and we <br />
              only use the freshest and finest ingredients in all our cakes and <br />
              pastries.
            </p>
            <a href="#contact" className={style.btn}>Our Values</a>
          </span>
        </section>
        <section className={style.bottomFamily}>
          
        </section>
      </div>
    </div>
  );
};

export default Family;
