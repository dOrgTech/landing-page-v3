import React from "react";

const SIZE = 32;

export const AbstractIcon = ({ color }: { color: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: color, height: SIZE, width: SIZE }}
    >
      <path d="M4 6H20V16H10L6 18V16H4V6Z" stroke="currentColor" />
      <rect x="7" y="10" width="2" height="2" fill="currentColor" />
      <rect x="11" y="10" width="2" height="2" fill="currentColor" />
      <rect x="15" y="10" width="2" height="2" fill="currentColor" />
    </svg>
  );
};

export const BackgroundIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: color, height: SIZE, width: SIZE }}
    >
      <path d="M15 4H19V21H5V4H9" stroke="currentColor" />
      <path d="M9 2.99994H15V5.99994H9V2.99994Z" stroke="currentColor" />
      <path
        d="M14 8.5L7 8.5M17 10.5H7M15 12.5H7M17 14.5L7 14.5M12 16.5H7M16 18.5H7"
        stroke="currentColor"
      />
    </svg>
  );
};

export const TeamIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: color, height: SIZE, width: SIZE }}
    >
      <circle cx="6.69652" cy="9.54076" r="1.54076" stroke="currentColor" />
      <path
        d="M7.85189 10.5706C8.38209 10.8225 8.81705 11.2423 9.08802 11.7613M5.54076 10.5706C4.62981 11.0034 4 11.9319 4 13.0075V15.9334H8.5"
        stroke="currentColor"
      />
      <circle cx="12.0892" cy="8.9852" r="1.9852" stroke="currentColor" />
      <path
        d="M13.5778 10.3121C14.7515 10.8697 15.563 12.066 15.563 13.4519V17.9334H8.61475V13.4519C8.61475 12.066 9.42622 10.8697 10.5999 10.3121"
        stroke="currentColor"
      />
      <circle cx="17.4812" cy="9.54076" r="1.54076" stroke="currentColor" />
      <path
        d="M18.6367 10.5706C19.5476 11.0034 20.1774 11.9319 20.1774 13.0075V15.9334H15.4996M16.3256 10.5706C15.8195 10.811 15.4002 11.2044 15.1274 11.691"
        stroke="currentColor"
      />
    </svg>
  );
};

export const FocusIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: color, height: SIZE, width: SIZE }}
    >
      <circle cx="12.5" cy="12.5" r="6.5" stroke="currentColor" />
      <circle cx="12.5" cy="12.5" r="3.5" stroke="currentColor" />
      <path d="M12.5 4V7" stroke="currentColor" />
      <path d="M12.5 18V21" stroke="currentColor" />
      <path d="M4 12.5L7 12.5" stroke="currentColor" />
      <path d="M18 12.5L21 12.5" stroke="currentColor" />
    </svg>
  );
};

export const ObjectivesIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: color, height: SIZE, width: SIZE }}
    >
      <path
        d="M18.4042 9.77772C18.7866 10.6058 19 11.528 19 12.5C19 16.0899 16.0899 19 12.5 19C8.91015 19 6 16.0899 6 12.5C6 8.91015 8.91015 6 12.5 6C13.5362 6 14.5158 6.24248 15.3852 6.6738"
        stroke="currentColor"
      />
      <circle cx="12.5" cy="12.5" r="3.5" stroke="currentColor" />
      <path
        d="M12.501 12.5848L15.027 10.0589M16.7099 8.376L15.0598 10.0261M15.0598 10.0261V7.09064L18.0609 4.0896V7.09064H21.0291L18.0609 10.0589H15.027M15.0598 10.0261L15.027 10.0589"
        stroke="currentColor"
      />
    </svg>
  );
};

export const ProjectsIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: color, height: SIZE, width: SIZE }}
    >
      <path
        d="M6.23291 8.50817V4H17.7782V7.50483M17.7782 11.0097V7.50483M17.7782 7.50483H19.514V11.0097"
        stroke="currentColor"
      />
      <path
        d="M13.655 5.91327L7.88232 5.91327M16.129 7.5626H7.88232M14.4797 9.21194H9.2925"
        stroke="currentColor"
      />
      <path
        d="M7.85993 9.9754H5.16335M3.81494 8.34918L3.81495 19.6636H20.2475V10.8435H9.24328L9.24328 8.34918H3.81494Z"
        stroke="currentColor"
      />
    </svg>
  );
};
export const IncentivesIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: color, height: SIZE, width: SIZE }}
    >
      <rect x="5" y="18" width="2" height="3" stroke="currentColor" />
      <rect x="9" y="15" width="2" height="6" stroke="currentColor" />
      <rect x="13" y="16" width="2" height="5" stroke="currentColor" />
      <rect x="17" y="13" width="2" height="8" stroke="currentColor" />
      <path d="M5 16L10 11L14 12L19 7M19 7H17M19 7V9" stroke="currentColor" />
      <path d="M4.5 12.5L10 7L14 8L19 3M19 3H17M19 3V5" stroke="currentColor" />
    </svg>
  );
};

export const ConclusionIcon = ({ color }: { color: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: color, height: SIZE, width: SIZE }}
    >
      <path
        d="M15.5156 9.53906L10.5938 14.4609L8.48438 12.3516"
        stroke="currentColor"
      />
      <rect
        x="4.125"
        y="4.125"
        width="15.75"
        height="15.75"
        rx="7.875"
        stroke="currentColor"
      />
    </svg>
  );
};

export const PressIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: color, height: SIZE, width: SIZE }}
    >
      <rect
        x="3.48047"
        y="13.7435"
        width="3"
        height="4"
        transform="rotate(-30 3.48047 13.7435)"
        stroke="currentColor"
      />
      <path
        d="M8.32861 16.1406L10.3286 19.6047L12.9267 18.1047L11.1173 14.9706"
        stroke="currentColor"
      />
      <path
        d="M6.07861 12.2435L14.1049 4.14539L19.1049 12.8056L8.07861 15.7076L6.07861 12.2435Z"
        stroke="currentColor"
      />
      <path
        d="M17.855 10.6406C19.0507 9.9502 19.4604 8.42122 18.77 7.22549C18.0797 6.02976 16.5507 5.62007 15.355 6.31042"
        stroke="currentColor"
      />
    </svg>
  );
};
