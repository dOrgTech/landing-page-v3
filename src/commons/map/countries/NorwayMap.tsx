import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const NorwayMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Norway}
      onMouseEnter={handleMouseEnter(Countries.Norway)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M585.673 301.696L581.942 301.661V305.427H585.673V301.696Z' />
      <path d='M577.482 301.696L573.751 301.661V305.427H577.482V301.696Z' />
      <path d='M593.865 293.551L590.134 293.516V297.282H593.865V293.551Z' />
      <path d='M585.673 293.551L581.942 293.516V297.282H585.673V293.551Z' />
      <path d='M577.482 293.551L573.751 293.516V297.282H577.482V293.551Z' />
      <path d='M593.865 285.395L590.134 285.359V289.126H593.865V285.395Z' />
      <path d='M585.673 285.395L581.942 285.359V289.126H585.673V285.395Z' />
      <path d='M577.482 285.395L573.751 285.359V289.126H577.482V285.395Z' />
      <path d='M593.865 277.238L590.134 277.203V280.969H593.865V277.238Z' />
      <path d='M585.673 277.238L581.942 277.203V280.969H585.673V277.238Z' />
      <path d='M577.482 277.238L573.751 277.203V280.969H577.482V277.238Z' />
      <path d='M593.865 269.082L590.134 269.046V272.813H593.865V269.082Z' />
      <path d='M593.865 260.937L590.134 260.901V264.668H593.865V260.937Z' />
      <path d='M602.057 260.937L598.326 260.901V264.668H602.057V260.937Z' />
      <path d='M602.057 252.781L598.326 252.746V256.512H602.057V252.781Z' />
      <path d='M610.249 244.624L606.518 244.589V248.355H610.249V244.624Z' />
      <path d='M602.057 244.624L598.326 244.589V248.355H602.057V244.624Z' />
      <path d='M610.249 236.479L606.518 236.444V240.21H610.249V236.479Z' />
      <path d='M618.44 228.323L614.709 228.288V232.054H618.44V228.323Z' />
      <path d='M618.452 220.167L614.721 220.131V223.898H618.452V220.167Z' />
      <path d='M610.249 228.323L606.518 228.288V232.054H610.249V228.323Z' />
      <path d='M643.005 220.167L639.274 220.131V223.898H643.005V220.167Z' />
      <path d='M634.813 220.167L631.082 220.131V223.898H634.813V220.167Z' />
      <path d='M626.632 220.167L622.901 220.131V223.898H626.632V220.167Z' />
      <path d='M651.196 212.01L647.465 211.975V215.741H651.196V212.01Z' />
      <path d='M643.005 212.01L639.274 211.975V215.741H643.005V212.01Z' />
      <path d='M634.813 212.01L631.082 211.975V215.741H634.813V212.01Z' />
    </g>
  );
};
export default NorwayMap;
