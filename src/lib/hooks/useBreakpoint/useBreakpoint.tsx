import { useEffect, useMemo, useState } from "react";

import { breakpoints } from "lib/theme/extensions";
import { emToPx } from "lib/util";

import type { BreakpointToken } from "generated/panda/tokens";

interface WindowDimensions {
  width: typeof window.innerWidth;
  height: typeof window.innerHeight;
}

export interface Options {
  /** Fallback breakpoint to use if no match is found, or if `window` is undefined as in server-side contexts. Defaults to "base". */
  fallback?: BreakpointToken;
}

/**
 * Get the current theme breakpoint.
 */
const useBreakpoint = ({ fallback = "base" }: Options = {}) => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

  // Derive state during render
  const breakpoint = useMemo<BreakpointToken>(() => {
    if (!windowDimensions.width) return fallback;

    const range = Object.entries(breakpoints!)
      .map(([key, value]) => [key, emToPx(value as `${number}em`)])
      .reverse();

    return (
      (range.find(
        ([, breakpoint]) => +breakpoint <= windowDimensions.width,
      )?.[0] as BreakpointToken) ?? fallback
    );
  }, [windowDimensions.width, fallback]);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
