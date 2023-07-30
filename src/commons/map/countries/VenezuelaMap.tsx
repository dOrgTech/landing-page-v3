import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const VenezuelaMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Venezuela}
      onMouseEnter={handleMouseEnter(Countries.Venezuela)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M339.967 538.139L336.236 538.104V541.87H339.967V538.139Z' />
      <path d='M348.159 529.983L344.428 529.947V533.714H348.159V529.983Z' />
      <path d='M339.967 529.983L336.236 529.947V533.714H339.967V529.983Z' />
      <path d='M356.351 521.826L352.62 521.791V525.557H356.351V521.826Z' />
      <path d='M348.159 521.826L344.428 521.791V525.557H348.159V521.826Z' />
      <path d='M339.967 521.826L336.236 521.791V525.557H339.967V521.826Z' />
      <path d='M331.775 521.826L328.044 521.791V525.557H331.775V521.826Z' />
      <path d='M323.596 521.826L319.865 521.791V525.557H323.596V521.826Z' />
      <path d='M356.351 513.682L352.62 513.646V517.413H356.351V513.682Z' />
      <path d='M348.159 513.682L344.428 513.646V517.413H348.159V513.682Z' />
      <path d='M348.159 505.536L344.428 505.501V509.267H348.159V505.536Z' />
      <path d='M339.967 513.682L336.236 513.646V517.413H339.967V513.682Z' />
      <path d='M339.967 505.536L336.236 505.501V509.267H339.967V505.536Z' />
      <path d='M331.775 513.682L328.044 513.646V517.413H331.775V513.682Z' />
      <path d='M323.596 513.682L319.865 513.646V517.413H323.596V513.682Z' />
      <path d='M331.775 505.525L328.044 505.49V509.256H331.775V505.525Z' />
      <path d='M323.596 505.525L319.865 505.49V509.256H323.596V505.525Z' />
    </g>
  );
};
export default VenezuelaMap;
