import { StoryblokComponent } from "@storyblok/react";
import React from "react";
import { redirect } from "next/navigation";

import { initStoryblok, fetchStoryBySlug } from "@/lib/services";

export interface BlogPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  initStoryblok();
  const story = await fetchStoryBySlug(params.slug, params.locale);

  if (!story) {
    redirect("/");
  }

  return <StoryblokComponent blok={story.content} />;
};

export default BlogPage;
