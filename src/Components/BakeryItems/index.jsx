import React from "react";
import BakeryProps from "../BakeryProps";
import style from "./style.module.css";
import Bagutte from '../../Image/bagutte.jpg'
import Sourdough from '../../Image/sss.jpg'
import Mix from '../../Image/mix.jpg'
import Milk from '../../Image/milk.jpg'
import Weat from '../../Image/weat.jpg'
import Brown from '../../Image/brown.jpg'

const BakeryItems = () => {
  return (
    <div>
      <div className={style.bakeryItems}>
        <section className={style.topFamily}>
          <span>
            <h2>Bakery Items</h2>
            <p>
              Each product and pastry is handcrafted the moment you order.{" "}
              <br /> Our handcrafted cakes are delicious works of edible art!
              And we would <br />
              like that experience being shared to you and your guests.
            </p>
          </span>
        </section>
        <section className={style.bottomFamily}>
          <div className={style.bakeryGrid}>
                <BakeryProps
                  Image={Bagutte}
                  Alt="Bakery.png"
                  Header="Bagutte"
                  Paragraph="Small-batch sourdough baguette."
                  Price="$4.3"
                />
                  <BakeryProps
                  Image={Sourdough}
                  Alt="Bakery.png"
                  Header="Bagutte"
                  Paragraph="Small-batch sourdough baguette."
                  Price="$4.3"
                />
                  <BakeryProps
                  Image={Mix}
                  Alt="Bakery.png"
                  Header="Bagutte"
                  Paragraph="Small-batch sourdough baguette."
                  Price="$4.3"
                />
                  <BakeryProps
                  Image={Milk}
                  Alt="Bakery.png"
                  Header="Bagutte"
                  Paragraph="Small-batch sourdough baguette."
                  Price="$4.3"
                />
                   <BakeryProps
                  Image={Weat}
                  Alt="Bakery.png"
                  Header="Bagutte"
                  Paragraph="Small-batch sourdough baguette."
                  Price="$4.3"
                />
                   <BakeryProps
                  Image={Brown}
                  Alt="Bakery.png"
                  Header="Bagutte"
                  Paragraph="Small-batch sourdough baguette."
                  Price="$4.3"
                />
          </div>
        </section>
      </div>
    </div>
  );
};

export default BakeryItems;
