import React from "react";
import ReactCarousel, {
  CarouselProps,
  ResponsiveType,
} from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import theme from "../../theme";

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
      breakpoint: { max: 4000, min: theme.breakpoints.values.xl },
      items: itemsPerRowLargeDesktop ?? 3,
    },
    desktop: {
      breakpoint: { max: theme.breakpoints.values.xl, min: theme.breakpoints.values.md },
      items: itemsPerRowDesktop ?? 3,
    },
    tablet: {
      breakpoint: { max: theme.breakpoints.values.md, min: theme.breakpoints.values.sm },
      items: itemsPerRowTablet ?? 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: itemsPerRowMobile ?? 1,
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
