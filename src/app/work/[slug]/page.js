import LegacyRouteRedirect from "@/components/LegacyRouteRedirect";
import { INSTALLATIONS } from "@/data/installations";

export function generateStaticParams() {
  return INSTALLATIONS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { alternates: { canonical: `/realizacje/${slug}/` } };
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
