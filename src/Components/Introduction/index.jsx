import React from "react";
import style from "./style.module.css";

const Introduction = () => {
  return (
    <div>
      <div className={style.introContainer}>
        <div className={style.introContent}>
          <h1>Bready</h1>
          <p>
            Specialized in creating delicious breads using fresh ingredients and
            bringing out their finest to our dessert selection.
          </p>
          <p>
            We only use the freshest and finest ingredients in our cakes and
            pastries, including - real butter, fresh free range eggs, 100%
            Canadian diary whipped cream, and European chocolate.
          </p>
          <a href="#contact">Lets Bake</a>
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default Introduction;
