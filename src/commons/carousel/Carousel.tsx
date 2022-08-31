import React from "react";
import ReactCarousel, {
  CarouselProps,
  ResponsiveType,
} from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import theme from "../../theme";

interface CustomCarouselProps extends Omit<CarouselProps, "responsive"> {
  itemsPerRow?: (null | number)[]; //from SuperLarge to mobile
}

type CarouseRowType = {
  itemsPerRow?: (null | number)[];
};

const generateResponsiveBody = ({
  itemsPerRow,
}: CarouseRowType): ResponsiveType => {
  return {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: theme.breakpoints.values.xl },
      items: (itemsPerRow && itemsPerRow[0]) ?? 3,
    },
    desktop: {
      breakpoint: {
        max: theme.breakpoints.values.xl,
        min: theme.breakpoints.values.md,
      },
      items: (itemsPerRow && itemsPerRow[1]) ?? 3,
    },
    tablet: {
      breakpoint: {
        max: theme.breakpoints.values.md,
        min: theme.breakpoints.values.sm,
      },
      items: (itemsPerRow && itemsPerRow[2]) ?? 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: (itemsPerRow && itemsPerRow[3]) ?? 1,
    },
  };
};

const Carousel: React.FC<CustomCarouselProps> = ({
  children,
  itemsPerRow,
  ...props
}) => {
  const responsive = generateResponsiveBody({
    itemsPerRow,
  });

  return (
    <ReactCarousel responsive={responsive} {...props}>
      {children}
    </ReactCarousel>
  );
};

export default Carousel;
