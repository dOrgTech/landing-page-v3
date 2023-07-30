import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const SpainMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Spain}
      onMouseEnter={handleMouseEnter(Countries.Spain)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M552.919 399.538L549.188 399.503V403.269H552.919V399.538Z' />
      <path d='M544.727 399.538L540.996 399.503V403.269H544.727V399.538Z' />
      <path d='M536.535 399.538L532.804 399.503V403.269H536.535V399.538Z' />
      <path d='M561.11 391.382L557.379 391.347V395.114H561.11V391.382Z' />
      <path d='M552.919 391.382L549.188 391.347V395.114H552.919V391.382Z' />
      <path d='M544.727 391.382L540.996 391.347V395.114H544.727V391.382Z' />
      <path d='M552.919 383.226L549.188 383.19V386.957H552.919V383.226Z' />
      <path d='M544.727 383.226L540.996 383.19V386.957H544.727V383.226Z' />
      <path d='M536.535 383.226L532.804 383.19V386.957H536.535V383.226Z' />
      <path d='M528.343 383.226L524.612 383.19V386.957H528.343V383.226Z' />
      <path d='M528.329 407.683L524.598 407.647V411.414H528.329V407.683Z' />
      <path d='M528.329 399.538L524.598 399.503V403.269H528.329V399.538Z' />
      <path d='M528.329 391.381L524.598 391.346V395.113H528.329V391.381Z' />
      <path d='M536.532 391.381L532.801 391.346V395.113H536.532V391.381Z' />
    </g>
  );
};
export default SpainMap;
