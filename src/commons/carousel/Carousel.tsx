import React from "react";
import ReactCarousel, { CarouselProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./react-multi-carousel-custom-styles.css"

type CustomCarouselProps = Omit<CarouselProps, "responsive">;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const Carousel: React.FC<CustomCarouselProps> = ({ children, ...props }) => {
  return (
    <ReactCarousel responsive={responsive} {...props}>
      {children}
    </ReactCarousel>
  );
};

export default Carousel;