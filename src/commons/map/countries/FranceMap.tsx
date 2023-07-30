import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const FranceMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.France}
      onMouseEnter={handleMouseEnter(Countries.France)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M585.673 391.382L581.942 391.347V395.113H585.673V391.382Z' />
      <path d='M577.481 383.226L573.75 383.19V386.957H577.481V383.226Z' />
      <path d='M569.29 383.226L565.559 383.19V386.957H569.29V383.226Z' />
      <path d='M569.29 391.382L565.559 391.347V395.113H569.29V391.382Z' />
      <path d='M561.11 383.226L557.379 383.19V386.957H561.11V383.226Z' />
      <path d='M577.481 375.081L573.75 375.045V378.812H577.481V375.081Z' />
      <path d='M569.29 375.081L565.559 375.045V378.812H569.29V375.081Z' />
      <path d='M561.11 375.081L557.379 375.045V378.812H561.11V375.081Z' />
      <path d='M577.481 366.924L573.75 366.889V370.655H577.481V366.924Z' />
      <path d='M569.29 366.924L565.559 366.889V370.655H569.29V366.924Z' />
      <path d='M561.11 366.924L557.379 366.889V370.655H561.11V366.924Z' />
      <path d='M552.918 366.924L549.187 366.889V370.655H552.918V366.924Z' />
      <path d='M577.481 358.768L573.75 358.733V362.499H577.481V358.768Z' />
      <path d='M569.29 358.768L565.559 358.733V362.499H569.29V358.768Z' />
      <path d='M561.11 358.768L557.379 358.733V362.499H561.11V358.768Z' />
      <path d='M552.918 358.768L549.187 358.733V362.499H552.918V358.768Z' />
      <path d='M544.727 358.768L540.996 358.733V362.499H544.727V358.768Z' />
      <path d='M569.29 350.612L565.559 350.576V354.343H569.29V350.612Z' />
    </g>
  );
};
export default FranceMap;
