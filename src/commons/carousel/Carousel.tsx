import React from "react";
import ReactCarousel, { CarouselProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./react-multi-carousel-custom-styles.css"

const Carousel: React.FC<CarouselProps> = ({ children, ...props }) => {
  return (
    <ReactCarousel {...props}>
      {children}
    </ReactCarousel>
  );
};

export default Carousel;
