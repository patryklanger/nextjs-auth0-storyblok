import { getSession } from "@auth0/nextjs-auth0/edge";
import { notFound, redirect } from "next/navigation";

const PreviewPage = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/api/auth/login");
  }

  notFound();
};

export default PreviewPage;
