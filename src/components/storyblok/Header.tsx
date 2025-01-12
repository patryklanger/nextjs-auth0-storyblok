import React from "react";
import { storyblokEditable } from "@storyblok/react";

import { HeaderStoryblok } from "@/lib/models/storyblok/StoryblokComponents";

interface IProps {
  blok: HeaderStoryblok;
}

const Header = ({ blok }: IProps) => {
  const { content, className } = blok;
  return (
    <h1
      {...storyblokEditable(blok)}
      className={className}
    >
      {content}
    </h1>
  );
};

export default Header;
