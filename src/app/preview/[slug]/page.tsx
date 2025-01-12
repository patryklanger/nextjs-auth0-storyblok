import React from "react";
import { notFound, redirect } from "next/navigation";
import { StoryblokStory } from "@storyblok/react/rsc";
import { getSession } from "@auth0/nextjs-auth0";

import { validateStoryblokToken } from "@/lib/helpers";
import { fetchStoryBySlug } from "@/lib/services";
import StoryblokProvider from "@/providers/StoryblokProvider";

export interface PreviewPageProps {
  params: {
    slug: string;
  };
  searchParams: Record<string, string | string[]>;
}

const PreviewPage = async ({ params: { slug }, searchParams }: PreviewPageProps) => {
  const session = await getSession();

  if (!validateStoryblokToken(searchParams)) {
    if (!session) {
      redirect("/api/auth/login");
    }

    notFound();
  }

  const story = await fetchStoryBySlug(slug, process.env.STORYBLOK_PREVIEW_ACCESS_TOKEN);

  return (
    <StoryblokProvider accessToken={process.env.STORYBLOK_PREVIEW_ACCESS_TOKEN}>
      <StoryblokStory story={story} />
    </StoryblokProvider>
  );
};

export default PreviewPage;
