import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const RomaniaMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Romania}
      onMouseEnter={handleMouseEnter(Countries.Romania)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M651.196 375.081L647.465 375.046V378.812H651.196V375.081Z' />
      <path d='M643.004 375.081L639.273 375.046V378.812H643.004V375.081Z' />
      <path d='M634.812 375.081L631.081 375.046V378.812H634.812V375.081Z' />
      <path d='M643.004 366.924L639.273 366.889V370.656H643.004V366.924Z' />
      <path d='M651.195 366.924L647.464 366.889V370.656H651.195V366.924Z' />
      <path d='M634.812 366.924L631.081 366.889V370.656H634.812V366.924Z' />
    </g>
  );
};
export default RomaniaMap;
