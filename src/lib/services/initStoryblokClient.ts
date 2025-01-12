import StoryblokClient from "storyblok-js-client";

const storyblokClient = new StoryblokClient({
  accessToken: process.env.STORYBLOK_CONTENT_ACCESS_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

const initStoryblokClient = () => storyblokClient;

export default initStoryblokClient;
