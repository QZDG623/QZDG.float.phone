"use client";

import { StoryApp as BaseStoryApp } from "./story-app-base";
import { StoryScrollFix } from "./story-scroll-fix";

export function StoryApp(props: any) {
  return (
    <>
      <StoryScrollFix />
      <BaseStoryApp {...props} />
    </>
  );
}
