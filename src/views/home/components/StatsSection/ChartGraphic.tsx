import React from "react";
import { styled } from "@mui/material";
import { StatProps } from ".";

const ChartGraphicSVG = styled("svg")({
  "& stop": {
    transition: "all 0.25s",
  }
})

interface Props {
  id: string;
  hoverId: string | null;
  color: StatProps["color"];
  activeColors: StatProps["activeColors"];
}

const ChartGraphic: React.FC<Props> = ({hoverId, id, color, activeColors}) => {

  const hovering = hoverId === id;
  const baseColor = (hovering && activeColors) ? activeColors[0] : color

  return (
    <ChartGraphicSVG viewBox="0 0 296 183" xmlns="http://www.w3.org/2000/svg" style={{display: "block", width: "100%"}}>
      <path d="M283.306 0.624512H295.658V12.9761H283.306V0.624512Z" fill={`url(#${id})`}/>
      <path d="M253.301 42.9812H240.949V55.3328H253.301V42.9812Z" fill={`url(#${id})`}/>
      <path d="M210.935 99.4631H198.583V111.815H210.935V99.4631Z" fill={`url(#${id})`}/>
      <path d="M140.337 113.58H127.986V125.931H140.337V113.58Z" fill={`url(#${id})`}/>
      <path d="M154.462 127.704H142.11V140.056H154.462V127.704Z" fill={`url(#${id})`}/>
      <path d="M154.462 141.794H142.11V154.146H154.462V141.794Z" fill={`url(#${id})`}/>
      <path d="M142.11 155.884H154.462V168.236H142.11V155.884Z" fill={`url(#${id})`}/>
      <path d="M154.462 169.974H142.11V182.326H154.462V169.974Z" fill={`url(#${id})`}/>
      <path d="M156.227 141.821H168.578V154.172H156.227V141.821Z" fill={`url(#${id})`}/>
      <path d="M168.578 155.911H156.227V168.262H168.578V155.911Z" fill={`url(#${id})`}/>
      <path d="M156.227 170.001H168.578V182.352H156.227V170.001Z" fill={`url(#${id})`}/>
      <path d="M127.986 127.67H140.337V140.021H127.986V127.67Z" fill={`url(#${id})`}/>
      <path d="M140.337 141.76H127.986V154.111H140.337V141.76Z" fill={`url(#${id})`}/>
      <path d="M127.986 155.85H140.337V168.201H127.986V155.85Z" fill={`url(#${id})`}/>
      <path d="M140.337 169.94H127.986V182.291H140.337V169.94Z" fill={`url(#${id})`}/>
      <path d="M113.869 155.937H126.221V168.289H113.869V155.937Z" fill={`url(#${id})`}/>
      <path d="M126.221 170.027H113.869V182.379H126.221V170.027Z" fill={`url(#${id})`}/>
      <path d="M99.7527 141.821H112.104V154.172H99.7527V141.821Z" fill={`url(#${id})`}/>
      <path d="M112.104 155.911H99.7528V168.262H112.104V155.911Z" fill={`url(#${id})`}/>
      <path d="M99.7528 170.001H112.104V182.352H99.7528V170.001Z" fill={`url(#${id})`}/>
      <path d="M97.9795 141.821H85.6279V154.172H97.9795V141.821Z" fill={`url(#${id})`}/>
      <path d="M85.628 155.911H97.9796V168.262H85.628V155.911Z" fill={`url(#${id})`}/>
      <path d="M97.9796 170.001H85.628V182.352H97.9796V170.001Z" fill={`url(#${id})`}/>
      <path d="M71.5115 155.937H83.8631V168.289H71.5115V155.937Z" fill={`url(#${id})`}/>
      <path d="M83.8631 170.027H71.5115V182.379H83.8631V170.027Z" fill={`url(#${id})`}/>
      <path d="M57.3962 141.821H69.7479V154.172H57.3962V141.821Z" fill={`url(#${id})`}/>
      <path d="M69.7478 155.911H57.3962V168.262H69.7478V155.911Z" fill={`url(#${id})`}/>
      <path d="M57.3962 170.001H69.7478V182.352H57.3962V170.001Z" fill={`url(#${id})`}/>
      <path d="M55.6231 141.821H43.2715V154.172H55.6231V141.821Z" fill={`url(#${id})`}/>
      <path d="M43.2714 155.911H55.623V168.262H43.2714V155.911Z" fill={`url(#${id})`}/>
      <path d="M55.623 170.001H43.2714V182.352H55.623V170.001Z" fill={`url(#${id})`}/>
      <path d="M29.155 155.937H41.5066V168.289H29.155V155.937Z" fill={`url(#${id})`}/>
      <path d="M41.5066 170.027H29.155V182.379H41.5066V170.027Z" fill={`url(#${id})`}/>
      <path d="M15.0303 155.937H27.3819V168.289H15.0303V155.937Z" fill={`url(#${id})`}/>
      <path d="M27.3819 170.027H15.0303V182.379H27.3819V170.027Z" fill={`url(#${id})`}/>
      <path d="M0.913818 155.937H13.2655V168.289H0.913818V155.937Z" fill={`url(#${id})`}/>
      <path d="M13.2655 170.027H0.913818V182.379H13.2655V170.027Z" fill={`url(#${id})`}/>
      <path d="M170.352 127.704H182.703V140.056H170.352V127.704Z" fill={`url(#${id})`}/>
      <path d="M182.703 141.794H170.352V154.146H182.703V141.794Z" fill={`url(#${id})`}/>
      <path d="M170.352 155.884H182.703V168.236H170.352V155.884Z" fill={`url(#${id})`}/>
      <path d="M182.703 169.974H170.352V182.326H182.703V169.974Z" fill={`url(#${id})`}/>
      <path d="M184.467 113.58H196.819V125.931H184.467V113.58Z" fill={`url(#${id})`}/>
      <path d="M196.819 127.67H184.467V140.021H196.819V127.67Z" fill={`url(#${id})`}/>
      <path d="M184.467 141.76H196.819V154.111H184.467V141.76Z" fill={`url(#${id})`}/>
      <path d="M196.819 155.85H184.467V168.201H196.819V155.85Z" fill={`url(#${id})`}/>
      <path d="M184.467 169.94H196.819V182.291H184.467V169.94Z" fill={`url(#${id})`}/>
      <path d="M198.583 113.553H210.935V125.905H198.583V113.553Z" fill={`url(#${id})`}/>
      <path d="M210.935 127.643H198.583V139.995H210.935V127.643Z" fill={`url(#${id})`}/>
      <path d="M198.583 141.734H210.935V154.085H198.583V141.734Z" fill={`url(#${id})`}/>
      <path d="M210.935 155.823H198.583V168.175H210.935V155.823Z" fill={`url(#${id})`}/>
      <path d="M198.583 169.913H210.935V182.265H198.583V169.913Z" fill={`url(#${id})`}/>
      <path d="M225.06 127.704H212.708V140.056H225.06V127.704Z" fill={`url(#${id})`}/>
      <path d="M212.708 141.794H225.06V154.146H212.708V141.794Z" fill={`url(#${id})`}/>
      <path d="M225.06 155.884H212.708V168.236H225.06V155.884Z" fill={`url(#${id})`}/>
      <path d="M212.708 169.974H225.06V182.326H212.708V169.974Z" fill={`url(#${id})`}/>
      <path d="M239.176 99.4631H226.825V111.815H239.176V99.4631Z" fill={`url(#${id})`}/>
      <path d="M226.825 113.553H239.177V125.905H226.825V113.553Z" fill={`url(#${id})`}/>
      <path d="M239.177 127.643H226.825V139.995H239.177V127.643Z" fill={`url(#${id})`}/>
      <path d="M226.825 141.734H239.177V154.085H226.825V141.734Z" fill={`url(#${id})`}/>
      <path d="M239.176 155.823H226.825V168.175H239.176V155.823Z" fill={`url(#${id})`}/>
      <path d="M226.825 169.913H239.176V182.265H226.825V169.913Z" fill={`url(#${id})`}/>
      <path d="M240.949 57.0714H253.301V69.423H240.949V57.0714Z" fill={`url(#${id})`}/>
      <path d="M253.301 71.1615H240.949V83.5131H253.301V71.1615Z" fill={`url(#${id})`}/>
      <path d="M240.949 85.2514H253.301V97.603H240.949V85.2514Z" fill={`url(#${id})`}/>
      <path d="M253.301 99.3414H240.949V111.693H253.301V99.3414Z" fill={`url(#${id})`}/>
      <path d="M240.949 113.432H253.301V125.783H240.949V113.432Z" fill={`url(#${id})`}/>
      <path d="M253.301 127.522H240.949V139.873H253.301V127.522Z" fill={`url(#${id})`}/>
      <path d="M240.949 141.612H253.301V153.963H240.949V141.612Z" fill={`url(#${id})`}/>
      <path d="M253.301 155.702H240.949V168.053H253.301V155.702Z" fill={`url(#${id})`}/>
      <path d="M240.949 169.792H253.301V182.143H240.949V169.792Z" fill={`url(#${id})`}/>
      <path d="M267.417 42.9812H255.066V55.3328H267.417V42.9812Z" fill={`url(#${id})`}/>
      <path d="M255.066 57.0714H267.417V69.423H255.066V57.0714Z" fill={`url(#${id})`}/>
      <path d="M267.417 71.1615H255.066V83.5131H267.417V71.1615Z" fill={`url(#${id})`}/>
      <path d="M255.066 85.2514H267.417V97.603H255.066V85.2514Z" fill={`url(#${id})`}/>
      <path d="M267.417 99.3414H255.066V111.693H267.417V99.3414Z" fill={`url(#${id})`}/>
      <path d="M255.066 113.432H267.417V125.783H255.066V113.432Z" fill={`url(#${id})`}/>
      <path d="M267.417 127.522H255.066V139.873H267.417V127.522Z" fill={`url(#${id})`}/>
      <path d="M255.066 141.612H267.417V153.963H255.066V141.612Z" fill={`url(#${id})`}/>
      <path d="M267.417 155.702H255.066V168.053H267.417V155.702Z" fill={`url(#${id})`}/>
      <path d="M255.066 169.792H267.417V182.143H255.066V169.792Z" fill={`url(#${id})`}/>
      <path d="M281.533 57.1064H269.181V69.4581H281.533V57.1064Z" fill={`url(#${id})`}/>
      <path d="M269.181 71.1967H281.533V83.5483H269.181V71.1967Z" fill={`url(#${id})`}/>
      <path d="M281.533 85.2868H269.181V97.6384H281.533V85.2868Z" fill={`url(#${id})`}/>
      <path d="M269.181 99.3766H281.533V111.728H269.181V99.3766Z" fill={`url(#${id})`}/>
      <path d="M281.533 113.467H269.181V125.818H281.533V113.467Z" fill={`url(#${id})`}/>
      <path d="M269.181 127.557H281.533V139.908H269.181V127.557Z" fill={`url(#${id})`}/>
      <path d="M281.533 141.647H269.181V153.998H281.533V141.647Z" fill={`url(#${id})`}/>
      <path d="M269.181 155.737H281.533V168.088H269.181V155.737Z" fill={`url(#${id})`}/>
      <path d="M281.533 169.827H269.181V182.179H281.533V169.827Z" fill={`url(#${id})`}/>
      <path d="M295.658 14.7148H283.306V27.0664H295.658V14.7148Z" fill={`url(#${id})`}/>
      <path d="M283.306 28.8046H295.658V41.1563H283.306V28.8046Z" fill={`url(#${id})`}/>
      <path d="M295.658 42.8947H283.306V55.2463H295.658V42.8947Z" fill={`url(#${id})`}/>
      <path d="M283.306 56.9848H295.658V69.3364H283.306V56.9848Z" fill={`url(#${id})`}/>
      <path d="M295.658 71.0748H283.306V83.4264H295.658V71.0748Z" fill={`url(#${id})`}/>
      <path d="M283.306 85.1649H295.658V97.5165H283.306V85.1649Z" fill={`url(#${id})`}/>
      <path d="M295.658 99.2549H283.306V111.607H295.658V99.2549Z" fill={`url(#${id})`}/>
      <path d="M283.306 113.345H295.658V125.697H283.306V113.345Z" fill={`url(#${id})`}/>
      <path d="M295.658 127.435H283.306V139.787H295.658V127.435Z" fill={`url(#${id})`}/>
      <path d="M283.306 141.525H295.658V153.877H283.306V141.525Z" fill={`url(#${id})`}/>
      <path d="M295.658 155.615H283.306V167.967H295.658V155.615Z" fill={`url(#${id})`}/>
      <path d="M283.306 169.705H295.658V182.057H283.306V169.705Z" fill={`url(#${id})`}/>
      <defs>
        <linearGradient id={id} x1="148.281" y1="-0.356313" x2="148.281" y2="181.424" gradientUnits="userSpaceOnUse">
          {!!activeColors && (
            <stop offset={hovering ? 0 : 0.853} stopColor={activeColors[1]} stopOpacity={hovering ? 1 : 0}/>
          )}
          <stop offset="0.853" stopColor={baseColor} stopOpacity={!activeColors || !hovering ? 0 : 1}/>
          <stop offset="0.853" stopColor={baseColor}/>
          <stop offset="1" stopColor={baseColor} />
        </linearGradient>
      </defs>
    </ChartGraphicSVG>
  );
};

export default React.memo(ChartGraphic);
