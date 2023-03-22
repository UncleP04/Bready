import React from "react";
import style from "./style.module.css";
import { Link } from 'react-router-dom'

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
          <Link to="/contact">Lets Bake</Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
