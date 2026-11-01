"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const EMPTY_HASH_REDIRECTS = {};

export default function LegacyRouteRedirect({
  href,
  label,
  hashRedirects = EMPTY_HASH_REDIRECTS,
}) {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    router.replace(hashRedirects[hash] ?? href);
  }, [hashRedirects, href, router]);

  return (
    <main>
      <p>
        Ta strona jest teraz dostępna pod adresem{" "}
        <a href={href}>{label}</a>.
      </p>
    </main>
  );
}
