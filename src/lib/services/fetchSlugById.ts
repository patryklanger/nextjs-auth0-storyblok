import { getSession } from "@auth0/nextjs-auth0";
import { notFound } from "next/navigation";
import { ISbStoriesParams, ISbStoryData } from "storyblok-js-client";

import initStoryblokClient from "./initStoryblokClient";

import { hasPermission } from "../helpers/hasPermission";

export async function fetchStoryBySlug<T = any>(slug: string, previewToken?: string): Promise<ISbStoryData<T>> {
  const version = previewToken ? "draft" : "published";
  const cv = new Date().getTime() / 1000;
  const searchParamsData: ISbStoriesParams = {
    token: previewToken ?? process.env.STORYBLOK_CONTENT_ACCESS_TOKEN,
    cv,
    version,
  };

  const story = await initStoryblokClient()
    .get(`/cdn/stories/${slug}`, searchParamsData)
    .then(res => res.data?.story)
    .catch(() => notFound());

  if (previewToken) {
    return story;
  }

  const session = await getSession();
  const storyPermissions: string[] | undefined = story?.content?.permissions;

  if (storyPermissions?.length && !hasPermission(session.accessToken, storyPermissions)) {
    notFound();
  }

  return story;
}
