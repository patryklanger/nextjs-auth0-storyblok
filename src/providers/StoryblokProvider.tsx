"use client";

import { ReactNode } from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import { SB_COMPONENTS } from "@/components/storyblok/sbComponents";

interface StoryblokProviderProps {
  accessToken?: string;
  children: ReactNode | ReactNode[];
}

const StoryblokProvider = ({ accessToken, children }: StoryblokProviderProps) => {
  storyblokInit({
    accessToken,
    use: [apiPlugin],
    components: SB_COMPONENTS,
    apiOptions: {
      region: "eu",
    },
  });

  return children;
};

export default StoryblokProvider;
