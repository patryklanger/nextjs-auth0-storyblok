import crypto from "crypto";

export const validateStoryblokToken = (searchParams: { [key: string]: string | string[] }) => {
  const spaceId = searchParams["_storyblok_tk[space_id]"];
  const storyblokTimestamp = searchParams["_storyblok_tk[timestamp]"];
  const storyblokToken = searchParams["_storyblok_tk[token]"];

  if (!spaceId || !storyblokTimestamp || !storyblokToken || Number.isNaN(+storyblokTimestamp)) {
    return false;
  }

  const validationToken = crypto
    .createHash("sha1")
    .update(`${spaceId}:${process.env.STORYBLOK_PREVIEW_ACCESS_TOKEN}:${storyblokTimestamp}`)
    .digest("hex");

  return storyblokToken === validationToken && +storyblokTimestamp > Math.floor(Date.now() / 1000) - 3600;
};
