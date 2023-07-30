import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const UnitedKingdomMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.UnitedKingdom}
      onMouseEnter={handleMouseEnter(Countries.UnitedKingdom)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M561.11 342.467L557.379 342.432V346.198H561.11V342.467Z' />
      <path d='M561.11 334.31L557.379 334.275V338.041H561.11V334.31Z' />
      <path d='M552.918 342.467L549.187 342.432V346.198H552.918V342.467Z' />
      <path d='M544.727 342.467L540.996 342.432V346.198H544.727V342.467Z' />
      <path d='M552.918 334.31L549.187 334.275V338.041H552.918V334.31Z' />
      <path d='M544.727 334.31L540.996 334.275V338.041H544.727V334.31Z' />
      <path d='M552.918 326.154L549.187 326.119V329.885H552.918V326.154Z' />
      <path d='M544.727 326.154L540.996 326.119V329.885H544.727V326.154Z' />
      <path d='M536.535 326.154L532.804 326.119V329.885H536.535V326.154Z' />
      <path d='M544.727 318.009L540.996 317.974V321.74H544.727V318.009Z' />
      <path d='M544.727 309.853L540.996 309.817V313.584H544.727V309.853Z' />
      <path d='M536.535 309.853L532.804 309.817V313.584H536.535V309.853Z' />
      <path d='M544.727 301.708L540.996 301.673V305.439H544.727V301.708Z' />
      <path d='M552.918 293.551L549.187 293.516V297.282H552.918V293.551Z' />
    </g>
  );
};
export default UnitedKingdomMap;
