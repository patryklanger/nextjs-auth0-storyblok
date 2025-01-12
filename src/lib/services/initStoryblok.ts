import { storyblokInit } from "@storyblok/react";

import { SB_COMPONENTS } from "@/components/storyblok/sbComponents";

export const initStoryblok = () =>
  storyblokInit({
    components: SB_COMPONENTS,
  });
