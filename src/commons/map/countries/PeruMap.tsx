import React from "react";
import { useDelayedHover } from "../../../hooks/useDelayedHover";
import { Countries } from "../BuildersMap";

interface Props {
  className?: string;
  onHover: (
    country: Countries | undefined
  ) => React.MouseEventHandler<SVGGElement>;
}

const PeruMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { handleMouseEnter, handleMouseOut } = useDelayedHover(
    props.onHover,
    600
  );

  return (
    <g
      id={Countries.Peru}
      onMouseEnter={handleMouseEnter(Countries.Peru)}
      onMouseOut={handleMouseOut}
      fill='url(#paint0_linear_3616_2988)'>
      <path d='M323.598 595.212L319.867 595.176V598.943H323.598V595.212Z' />
      <path d='M315.407 595.212L311.676 595.176V598.943H315.407V595.212Z' />
      <path d='M323.598 587.055L319.867 587.02V590.786H323.598V587.055Z' />
      <path d='M315.407 587.055L311.676 587.02V590.786H315.407V587.055Z' />
      <path d='M307.215 587.055L303.484 587.02V590.786H307.215V587.055Z' />
      <path d='M323.598 578.899L319.867 578.864V582.63H323.598V578.899Z' />
      <path d='M315.407 578.899L311.676 578.864V582.63H315.407V578.899Z' />
      <path d='M307.215 578.899L303.484 578.864V582.63H307.215V578.899Z' />
      <path d='M315.407 570.754L311.676 570.719V574.485H315.407V570.754Z' />
      <path d='M307.215 570.754L303.484 570.719V574.485H307.215V570.754Z' />
      <path d='M299.023 570.754L295.292 570.719V574.485H299.023V570.754Z' />
      <path d='M315.407 562.598L311.676 562.562V566.329H315.407V562.598Z' />
      <path d='M307.215 562.598L303.484 562.562V566.329H307.215V562.598Z' />
      <path d='M299.023 562.598L295.292 562.562V566.329H299.023V562.598Z' />
      <path d='M290.843 562.598L287.112 562.562V566.329H290.843V562.598Z' />
      <path d='M323.598 554.442L319.867 554.406V558.173H323.598V554.442Z' />
      <path d='M315.407 554.442L311.676 554.406V558.173H315.407V554.442Z' />
      <path d='M307.215 554.442L303.484 554.406V558.173H307.215V554.442Z' />
      <path d='M299.023 554.442L295.292 554.406V558.173H299.023V554.442Z' />
      <path d='M290.831 554.442L287.1 554.406V558.173H290.831V554.442Z' />
      <path d='M315.407 546.285L311.676 546.25V550.016H315.407V546.285Z' />
    </g>
  );
};
export default PeruMap;
