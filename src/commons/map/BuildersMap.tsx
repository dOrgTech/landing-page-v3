import React, { useState } from "react";
import { ReactComponent as MapBackground } from "../../assets/imgs/mapBackground.svg";
import ArgentinaMap from "./countries/ArgentinaMap";
import CanadaMap from "./countries/CanadaMap";
import CroatiaMap from "./countries/CroatiaMap";
import FinlandMap from "./countries/FinlandMap";
import FranceMap from "./countries/FranceMap";
import GermanyMap from "./countries/GermanyMap";
import GhanaMap from "./countries/GhanaMap";
import IndiaMap from "./countries/IndiaMap";
import ItalyMap from "./countries/ItalyMap";
import MexicoMap from "./countries/MexicoMap";
import NorwayMap from "./countries/NorwayMap";
import PeruMap from "./countries/PeruMap";
import PortugalMap from "./countries/PortugalMap";
import RomaniaMap from "./countries/RomaniaMap";
import SpainMap from "./countries/SpainMap";
import UnitedKingdomMap from "./countries/UnitedKingdomMap";
import UnitedStatesMap from "./countries/UnitedStatesMap";
import VenezuelaMap from "./countries/VenezuelaMap";
import TooltipMap from "./TooltipMap";
import { Box } from "@mui/material";

export enum Countries {
  India = "India",
  Ghana = "Ghana",
  Romania = "Romania",
  Norway = "Norway",
  Finland = "Finland",
  Italy = "Italy",
  UnitedKingdom = "United Kingdom",
  France = "France",
  Spain = "Spain",
  Portugal = "Portugal",
  Germany = "Germany",
  Croatia = "Croatia",
  Peru = "Peru",
  Argentina = "Argentina",
  Venezuela = "Venezuela",
  Mexico = "Mexico",
  Canada = "Canada",
  UnitedStates = "United States",
}

interface Props {
  className?: string;
}

const BuildersMap: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const [tooltipContent, setTooltipContent] = useState<Countries | undefined>(
    undefined
  );

  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [currentCountry, setCurrentCountry] = useState<Countries | undefined>(
    undefined
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCountry = (country?: Countries): any => {
    setCurrentCountry(country);
    setTooltipContent(country ? (country as Countries) : undefined);
  };

  const mouseMoveHandler = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    setMouseCoordinates({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}>
      {currentCountry && (
        <TooltipMap
          mouseX={mouseCoordinates.x}
          mouseY={mouseCoordinates.y - 45}
          country={tooltipContent as Countries}
        />
      )}

      <svg
        width='100%'
        height='100%'
        viewBox='0 0 1302 876'
        preserveAspectRatio='xMidYMid meet'
        fill='none'
        onMouseMove={mouseMoveHandler}
        xmlns='http://www.w3.org/2000/svg'>
        <IndiaMap onHover={getCountry} />
        <GhanaMap onHover={getCountry} />
        <RomaniaMap onHover={getCountry} />
        <NorwayMap onHover={getCountry} />
        <FinlandMap onHover={getCountry} />
        <ItalyMap onHover={getCountry} />
        <CroatiaMap onHover={getCountry} />
        <UnitedKingdomMap onHover={getCountry} />
        <FranceMap onHover={getCountry} />
        <GermanyMap onHover={getCountry} />
        <PortugalMap onHover={getCountry} />
        <SpainMap onHover={getCountry} />
        <ArgentinaMap onHover={getCountry} />
        <PeruMap onHover={getCountry} />
        <VenezuelaMap onHover={getCountry} />
        <MexicoMap onHover={getCountry} />
        <UnitedStatesMap onHover={getCountry} />
        <CanadaMap onHover={getCountry} />
        <defs>
          <linearGradient
            id='paint0_linear_3616_2988'
            x1='0.443604'
            y1='762.001'
            x2='905.094'
            y2='762.001'
            gradientUnits='userSpaceOnUse'>
            <stop offset='0.0520833' stopColor='#5F6EEF' />
            <stop offset='0.270833' stopColor='#E65688' />
            <stop offset='0.432291' stopColor='#FF7B22' />
            <stop offset='0.557292' stopColor='#EFEE02' />
            <stop offset='0.713542' stopColor='#73F25F' />
            <stop offset='0.947917' stopColor='#4494F8' />
          </linearGradient>
        </defs>
        <MapBackground />
      </svg>
    </Box>
  );
};
export default BuildersMap;
