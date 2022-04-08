import { useMediaQuery } from "@mui/material";
import theme from "../theme";

// check if desktop or mobile/tablet
function useIsDesktop(): boolean {
  const isMobileUA = /Mobile|Tablet|Android|iOS|iPhone|iPad|iPod|BlackBerry|Phone/i.test(window.navigator.userAgent);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  return isLargeScreen && !isMobileUA;
}

export default useIsDesktop;
