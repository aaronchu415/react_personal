import React from "react";
import { Carousel } from "react-responsive-carousel";

export default (props) => (
  <Carousel
    autoPlay
    infiniteLoop={true}
    interval={2500}
    verticalSwipe='standard'
    useKeyboardArrows={true}
    emulateTouch={true}
  >
    {props.project.images.map(img => (
      <div>
        <img src={img.img} />
        <p className="legend">{img.desc}</p>
      </div>
    ))}
  </Carousel>
);
