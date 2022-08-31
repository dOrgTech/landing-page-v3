import React from "react";
import ReactCarousel, {
  CarouselProps,
  ResponsiveType,
} from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./react-multi-carousel-custom-styles.css"

interface CustomCarouselProps extends Omit<CarouselProps, "responsive"> {
  itemsPerRowLargeDesktop?: number;
  itemsPerRowDesktop?: number;
  itemsPerRowTablet?: number;
  itemsPerRowMobile?: number;
}

type CarouseRowType = {
  itemsPerRowLargeDesktop?: number;
  itemsPerRowDesktop?: number;
  itemsPerRowTablet?: number;
  itemsPerRowMobile?: number;
};

const generateResponsiveBody = ({
  itemsPerRowLargeDesktop,
  itemsPerRowDesktop,
  itemsPerRowTablet,
  itemsPerRowMobile,
}: CarouseRowType): ResponsiveType => {
  return {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: itemsPerRowLargeDesktop ?? 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemsPerRowDesktop ?? 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: itemsPerRowTablet ?? 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: itemsPerRowMobile ?? 3,
    },
  };
};

const Carousel: React.FC<CustomCarouselProps> = ({
  children,
  itemsPerRowLargeDesktop,
  itemsPerRowDesktop,
  itemsPerRowTablet,
  itemsPerRowMobile,
  ...props
}) => {
  const responsive = generateResponsiveBody({
    itemsPerRowLargeDesktop,
    itemsPerRowDesktop,
    itemsPerRowTablet,
    itemsPerRowMobile,
  });

  return (
    <ReactCarousel responsive={responsive} {...props}>
      {children}
    </ReactCarousel>
  );
};

export default Carousel;