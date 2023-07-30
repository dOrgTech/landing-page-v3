import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const PortugalMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Portugal}
      onMouseEnter={handleMouseEnter(Countries.Portugal)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M552.919 407.683L549.188 407.648V411.414H552.919V407.683Z' />
      <path d='M544.727 407.683L540.996 407.648V411.414H544.727V407.683Z' />
      <path d='M536.535 407.683L532.804 407.648V411.414H536.535V407.683Z' />
      <path d='M569.29 399.538L565.559 399.503V403.269H569.29V399.538Z' />
    </g>
  );
};
export default PortugalMap;
