import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { clsx } from "clsx";

import { ProjectStoryblok } from "@/lib/models/storyblok/StoryblokComponents";

interface IProps {
  blok: ProjectStoryblok;
}

const Project = ({ blok: { title, date, description, ...blok } }: Readonly<IProps>) => (
  <div
    {...storyblokEditable(blok)}
    className={clsx(
      "flex flex-col w-60 bg-slate-300 dark:bg-slate-800 px-3 py-2 text-black",
      "dark:text-white rounded-md border border-black dark:border-white",
    )}
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-xs">{date}</p>
    <p className="mt-2">{description}</p>
  </div>
);

export default Project;
