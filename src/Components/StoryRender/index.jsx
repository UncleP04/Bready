import React from "react";
import style from "./style.module.css";
import StoryImage from "../../Image/story.jpg";
import OurBread from "../../Image/ourbread.jpg";
import Story from "../Story";

const StoryRender = (props) => {
  return (
    <div>
      <div className={style.story}>
        <Story
          Image={StoryImage}
          Alt="Story.png"
          Header="Our Story"
          Paragraph="Lorem ipsum dolor sit amet,
           consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat."
        />

        <Story
          Image={OurBread}
          Alt="Story.png"
          Header="Our Story"
          Paragraph="Lorem ipsum dolor sit amet,
           consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat."
        />
      </div>
    </div>
  );
};

export default StoryRender;
