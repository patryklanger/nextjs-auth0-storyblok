import React from "react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

import { PageStoryblok } from "@/lib/models/storyblok/StoryblokComponents";

interface IProps {
  blok: PageStoryblok;
}

const DefaultPage = ({ blok }: IProps) => {
  return (
    <main
      {...storyblokEditable(blok)}
      className="px-4"
    >
      {blok.body
        ? blok.body.map(b => (
            <StoryblokComponent
              blok={b}
              // eslint-disable-next-line no-underscore-dangle
              key={b._uid}
            />
          ))
        : null}
    </main>
  );
};

export default DefaultPage;
