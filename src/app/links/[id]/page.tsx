import { LinksDeInteres } from "@/app/ui/LinksInteres";
import { redirect } from "next/navigation";

export function generateStaticParams() {
  return LinksDeInteres.map((link) => ({
    id: link.namebetacode,
  }));
}

export default async function LinkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const link = LinksDeInteres.find((link) => link.namebetacode === id);

  if (link) {
    redirect(link.path);
  }
  redirect("/links");
}
