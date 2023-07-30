import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const CroatiaMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Croatia}
      onMouseEnter={handleMouseEnter(Countries.Croatia)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M610.249 375.081L606.518 375.045V378.812H610.249V375.081Z' />
      <path d='M610.249 383.226L606.518 383.19V386.957H610.249V383.226Z' />
    </g>
  );
};
export default CroatiaMap;
