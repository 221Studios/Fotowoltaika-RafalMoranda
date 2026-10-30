import PageHeader from "@/components/PageHeader";
import ContactBanner from "@/components/ContactBanner";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact — Tessera Labs",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's build"
        subtitle="together"
        description="Reach out with a question, an idea, or something worth exploring."
        icon="SendIcon"
      />

      <ContactBanner />

      <FAQ />
    </>
  );
}
