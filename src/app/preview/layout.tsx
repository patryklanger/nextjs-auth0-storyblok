import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storyblok POC preview",
};

const PreviewLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => children;

export default PreviewLayout;
