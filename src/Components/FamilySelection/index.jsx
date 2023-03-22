import React from "react";
import style from "./style.module.css";
import Cake from "../../Image/cake.png";
import Cookies from "../../Image/cookie.png";
import Bread from "../../Image/bread.png";
import Bakery from "../../Image/bakery.png";

const FamilySelection = () => {
  return (
    <div>
      <div className={style.familySelection}>
        <span>
          <div className={style.foodCard}>
            <img src={Cake} alt="familybakery.png" />
            <h3>Cake</h3>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
              <br />
              Consequuntur ipsam sunt maxime <br /> eveniet placeat iure.
            </p>
          </div>
          <div className={style.foodCard}>
            <img src={Cookies} alt="familybakery.png" />
            <h3>Cookies</h3>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
              <br />
              Consequuntur ipsam sunt maxime <br /> eveniet placeat iure.
            </p>
          </div>
          <div className={style.foodCard}>
            <img src={Bread} alt="familybakery.png" />
            <h3>Bread</h3>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
              <br />
              Consequuntur ipsam sunt maxime <br /> eveniet placeat iure.
            </p>
          </div>
          <div className={style.foodCard}>
            <img src={Bakery} alt="familybakery.png" />
            <h3>Bakery</h3>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
              <br />
              Consequuntur ipsam sunt maxime <br /> eveniet placeat iure.
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default FamilySelection;
