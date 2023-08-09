import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const SwitzerlandMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Switzerland}
      onMouseEnter={handleMouseEnter(Countries.Switzerland)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M585.673 391.382L581.942 391.347V395.113H585.673V391.382Z' />
      <path d='M577.481 375.081L573.75 375.045V378.812H577.481V375.081Z' />
      <path d='M577.481 358.768L573.75 358.733V362.499H577.481V358.768Z' />
      <path d='M577.481 366.924L573.75 366.889V370.655H577.481V366.924Z' />
      <path d='M577.481 383.226L573.75 383.19V386.957H577.481V383.226Z' />
      <path d='M585.674 366.924L581.943 366.889V370.656H585.674V366.924Z' />
      <path d='M585.673 358.768L581.942 358.732V362.499H585.673V358.768Z' />
    </g>
  );
};
export default SwitzerlandMap;
