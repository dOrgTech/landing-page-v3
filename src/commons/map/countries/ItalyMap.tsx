import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const ItalyMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Italy}
      onMouseEnter={handleMouseEnter(Countries.Italy)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M602.057 407.683L598.326 407.648V411.414H602.057V407.683Z' />
      <path d='M585.673 399.539L581.942 399.503V403.27H585.673V399.539Z' />
      <path d='M610.248 391.382L606.517 391.347V395.113H610.248V391.382Z' />
      <path d='M610.248 399.539L606.517 399.503V403.27H610.248V399.539Z' />
      <path d='M610.248 407.683L606.517 407.648V411.414H610.248V407.683Z' />
      <path d='M618.44 399.539L614.709 399.503V403.27H618.44V399.539Z' />
      <path d='M602.057 391.382L598.326 391.347V395.113H602.057V391.382Z' />
      <path d='M602.057 383.226L598.326 383.19V386.957H602.057V383.226Z' />
      <path d='M593.865 383.226L590.134 383.19V386.957H593.865V383.226Z' />
      <path d='M593.865 375.081L590.134 375.046V378.812H593.865V375.081Z' />
      <path d='M585.673 375.081L581.942 375.046V378.812H585.673V375.081Z' />
      <path d='M593.865 366.924L590.134 366.889V370.656H593.865V366.924Z' />
      <path d='M618.441 375.081L614.71 375.045V378.812H618.441V375.081Z' />
    </g>
  );
};
export default ItalyMap;
