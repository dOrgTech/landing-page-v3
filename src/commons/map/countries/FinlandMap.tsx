import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const FinlandMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Finland}
      onMouseEnter={handleMouseEnter(Countries.Finland)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M651.195 285.395L647.464 285.36V289.126H651.195V285.395Z' />
      <path d='M643.004 285.395L639.273 285.36V289.126H643.004V285.395Z' />
      <path d='M634.812 285.395L631.081 285.36V289.126H634.812V285.395Z' />
      <path d='M659.387 277.239L655.656 277.204V280.97H659.387V277.239Z' />
      <path d='M651.195 277.239L647.464 277.204V280.97H651.195V277.239Z' />
      <path d='M643.004 277.239L639.273 277.204V280.97H643.004V277.239Z' />
      <path d='M634.812 277.239L631.081 277.204V280.97H634.812V277.239Z' />
      <path d='M659.387 269.083L655.656 269.047V272.814H659.387V269.083Z' />
      <path d='M651.195 269.083L647.464 269.047V272.814H651.195V269.083Z' />
      <path d='M643.004 269.083L639.273 269.047V272.814H643.004V269.083Z' />
      <path d='M634.812 269.083L631.081 269.047V272.814H634.812V269.083Z' />
      <path d='M651.195 260.938L647.464 260.902V264.669H651.195V260.938Z' />
      <path d='M643.004 260.938L639.273 260.902V264.669H643.004V260.938Z' />
      <path d='M651.195 252.781L647.464 252.746V256.512H651.195V252.781Z' />
      <path d='M643.004 252.781L639.273 252.746V256.512H643.004V252.781Z' />
      <path d='M651.195 244.625L647.464 244.589V248.356H651.195V244.625Z' />
      <path d='M643.004 244.625L639.273 244.589V248.356H643.004V244.625Z' />
      <path d='M651.195 236.48L647.464 236.444V240.211H651.195V236.48Z' />
      <path d='M643.004 236.48L639.273 236.444V240.211H643.004V236.48Z' />
      <path d='M651.195 228.324L647.464 228.289V232.055H651.195V228.324Z' />
      <path d='M643.051 228.324L639.32 228.289V232.055H643.051V228.324Z' />
      <path d='M634.812 228.324L631.081 228.289V232.055H634.812V228.324Z' />
      <path d='M651.289 220.167L647.558 220.132V223.898H651.289V220.167Z' />
    </g>
  );
};
export default FinlandMap;
