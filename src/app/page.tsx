import React from "react";
import { StoryblokComponent } from "@storyblok/react";
import { notFound } from "next/navigation";

import { initStoryblok, fetchStoryBySlug } from "@/lib/services";

const Home = async () => {
  initStoryblok();
  const story = await fetchStoryBySlug("home");

  if (!story) {
    return notFound();
  }

  return <StoryblokComponent blok={story.content} />;
};

export default Home;
