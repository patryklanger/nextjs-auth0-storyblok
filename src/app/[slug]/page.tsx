import { StoryblokComponent } from "@storyblok/react";
import React from "react";
import { redirect } from "next/navigation";

import { initStoryblok, fetchStoryBySlug } from "@/lib/services";

export interface BlogPageProps {
  params: {
    slug: string;
  };
}

const BlogPage = async ({ params: { slug } }: Readonly<BlogPageProps>) => {
  initStoryblok();
  const story = await fetchStoryBySlug(slug);

  if (!story) {
    redirect("/");
  }

  return <StoryblokComponent blok={story.content} />;
};

export default BlogPage;
