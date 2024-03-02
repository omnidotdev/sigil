import { defineKeyframes } from "@pandacss/dev";

/**
 * Animation keyframes.
 */
const keyframes = defineKeyframes({
  spin: {
    to: {
      transform: "rotate(360deg)",
    },
  },
  ping: {
    "75%, 100%": {
      transform: "scale(2)",
      opacity: 0,
    },
  },
  bounce: {
    "0%, 100%": {
      transform: "translateY(-25%)",
      animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
    },
    "50%": {
      transform: "none",
      animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
    },
  },
  "fade-in": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  "fade-out": {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  "slide-in": {
    "0%": { opacity: 0, transform: "translateY(64px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  "slide-out": {
    "0%": { opacity: 1, transform: "translateY(0)" },
    "100%": { opacity: 0, transform: "translateY(64px)" },
  },
  "slide-in-left": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0%)" },
  },
  "slide-out-left": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-100%)" },
  },
  "slide-in-right": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0%)" },
  },
  "slide-out-right": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(100%)" },
  },
  "collapse-in": {
    "0%": { height: "0" },
    "100%": { height: "var(--height)" },
  },
  "collapse-out": {
    "0%": { height: "var(--height)" },
    "100%": { height: "0" },
  },
  fadeIn: {
    "0%": { opacity: 0, transform: "translateY(-4px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  fadeOut: {
    "0%": { opacity: 1, transform: "translateY(0)" },
    "100%": { opacity: 0, transform: "translateY(-4px)" },
  },
  "skeleton-pulse": {
    "50%": {
      opacity: 0.5,
    },
  },
});

export default keyframes;
