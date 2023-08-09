import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const GermanyMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Germany}
      onMouseEnter={handleMouseEnter(Countries.Germany)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M552.918 358.768L549.187 358.733V362.499H552.918V358.768Z' />
      <path d='M544.727 358.768L540.996 358.733V362.499H544.727V358.768Z' />
      <path d='M569.29 350.612L565.559 350.576V354.343H569.29V350.612Z' />
      <path d='M602.057 358.768L598.326 358.732V362.499H602.057V358.768Z' />
      <path d='M593.865 358.768L590.134 358.732V362.499H593.865V358.768Z' />
      <path d='M593.865 350.611L590.134 350.576V354.342H593.865V350.611Z' />
      <path d='M585.673 350.611L581.942 350.576V354.342H585.673V350.611Z' />
      <path d='M602.057 342.466L598.326 342.431V346.198H602.057V342.466Z' />
      <path d='M593.865 342.466L590.134 342.431V346.198H593.865V342.466Z' />
      <path d='M585.673 342.466L581.942 342.431V346.198H585.673V342.466Z' />
      <path d='M602.057 334.31L598.326 334.275V338.041H602.057V334.31Z' />
      <path d='M593.865 334.31L590.134 334.275V338.041H593.865V334.31Z' />
      <path d='M585.673 334.31L581.942 334.275V338.041H585.673V334.31Z' />
      <path d='M585.674 326.153L581.943 326.118V329.885H585.674V326.153Z' />
    </g>
  );
};
export default GermanyMap;
