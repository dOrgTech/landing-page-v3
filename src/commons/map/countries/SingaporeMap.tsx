import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const SingaporeMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Singapore}
      onMouseEnter={handleMouseEnter(Countries.Singapore)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M905.094 538.14L901.363 538.104V541.871H905.094V538.14Z' />
      <path d='M896.903 546.283L893.172 546.248V550.014H896.903V546.283Z' />
      <path d='M905.095 546.283L901.364 546.248V550.014H905.095V546.283Z' />
      <path d='M905.095 554.44L901.364 554.405V558.171H905.095V554.44Z' />
      <path d='M896.903 554.44L893.172 554.405V558.171H896.903V554.44Z' />
    </g>
  );
};
export default SingaporeMap;
