import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";
import { INSTALLATIONS } from "@/data/installations";
import { createLegacyMetadata } from "@/lib/site";

export function generateStaticParams() {
  return INSTALLATIONS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return createLegacyMetadata(`/realizacje/${slug}/`);
}

export default async function LegacyInstallationPage({ params }) {
  const { slug } = await params;
  return (
    <LegacyRouteRedirect
      href={`/realizacje/${slug}/`}
      label="Realizacja"
    />
  );
}
