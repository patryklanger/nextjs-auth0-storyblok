import React from "react";
import Link from "next/link";

import { DEFAULT_BUTTON_STYLING } from "@/lib/styling";

const NotFound = () => (
  <div className="flex justify-center items-center h-screen flex-col gap-3">
    <h2 className="text-lg">Page not found</h2>
    <Link
      className={DEFAULT_BUTTON_STYLING}
      href="/"
    >
      Go to home
    </Link>
  </div>
);

export default NotFound;
