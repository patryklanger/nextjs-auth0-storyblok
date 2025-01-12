import React from "react";
import { notFound, redirect } from "next/navigation";
import { StoryblokStory } from "@storyblok/react/rsc";

import { validateStoryblokToken } from "@/lib/helpers/validateStoryblokToken";
import { fetchStoryBySlug } from "@/lib/services/fetchSlugById";
import StoryblokProvider from "@/providers/StoryblokProvider";
import { getSession } from "@auth0/nextjs-auth0";

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
