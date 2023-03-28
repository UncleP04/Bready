import React from "react";
import style from "./style.module.css";

const Story = (props) => {
  return (
    <div>
      <div className={style.story}>
        <div className={style.storyCard}>
          <span className={style.imageBox}>
            <img src={props.Image} alt={props.Alt} />
          </span>
          <span className={style.contentBox}>
            <h3>{props.Header}</h3>
            <p>{props.Paragraph}</p>
           <button>
              <a href="#learn">Learn More</a>
           </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Story;
