import { useState, useEffect } from "react";
import { Countries } from "../commons/map/BuildersMap";

type UseDelayedHoverReturn = {
  handleMouseEnter: (country: Countries) => () => void;
  handleMouseOut: () => void;
};

export const useDelayedHover = (
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>,
  delay = 600
): UseDelayedHoverReturn => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (country: Countries) => () => {
    if (timer) clearTimeout(timer);
    onHover(country);
  };

  const handleMouseOut = () => {
    setTimer(
      setTimeout(() => {
        onHover(undefined);
      }, delay)
    );
  };

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  return { handleMouseEnter, handleMouseOut };
};
