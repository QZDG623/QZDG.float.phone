"use client";

import { StoryApp as BaseStoryApp } from "./story-app-base";
import { withStoryScrollFix } from "./story-scroll-fix";

export const StoryApp = withStoryScrollFix(BaseStoryApp);
