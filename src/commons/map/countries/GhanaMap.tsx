import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const GhanaMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Ghana}
      onMouseEnter={handleMouseEnter(Countries.Ghana)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M561.11 521.826L557.379 521.791V525.557H561.11V521.826Z' />
      <path d='M561.11 513.682L557.379 513.646V517.413H561.11V513.682Z' />
      <path d='M552.918 521.826L549.187 521.791V525.557H552.918V521.826Z' />
      <path d='M552.918 513.682L549.187 513.646V517.413H552.918V513.682Z' />
      <path d='M561.11 505.525L557.379 505.49V509.256H561.11V505.525Z' />
    </g>
  );
};
export default GhanaMap;
