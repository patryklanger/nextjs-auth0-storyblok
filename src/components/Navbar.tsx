import React from "react";
import { clsx } from "clsx";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

import { DEFAULT_BUTTON_STYLING } from "@/lib/styling";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="p-4 bg-slate-200 dark:bg-slate-900 flex items-center gap-x-3">
      <p className="font-bold">Storyblok POC</p>
      <Link
        className="underline"
        href="/"
      >
        Main Page
      </Link>
      <Link
        className="underline"
        href="/test-story"
      >
        Test Story
      </Link>
      {session && (
        <a
          className={clsx(DEFAULT_BUTTON_STYLING, "ml-auto")}
          href="/api/auth/logout"
        >
          Logout
        </a>
      )}
    </nav>
  );
};

export default Navbar;
