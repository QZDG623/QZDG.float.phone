"use client";

import { useEffect } from "react";

const STORY_SCROLL_FIX = `
.story-app-shell .story-stage {
  overflow-y: auto !important;
  overflow-x: hidden !important;
  touch-action: pan-y !important;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: auto !important;
}
`;

export function withStoryScrollFix<P extends object>(Component: React.ComponentType<P>) {
  return function WithStoryScrollFix(props: P) {
    useEffect(() => {
      const style = document.createElement("style");
      style.setAttribute("data-story-scroll-fix", "true");
      style.textContent = STORY_SCROLL_FIX;
      document.head.appendChild(style);
      return () => style.remove();
    }, []);

    return <Component {...props} />;
  };
}
